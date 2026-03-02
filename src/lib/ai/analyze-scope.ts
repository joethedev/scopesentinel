/**
 * analyzeScope()
 *
 * Calls OpenAI to compare a client message against a signed contract and
 * determine whether the request is within the agreed scope.
 *
 * Uses raw fetch — no SDK dependency required.
 * Set OPENAI_API_KEY in .env.local.
 */

export type ScopeStatus = "in_scope" | "out_of_scope" | "unclear";

export interface ScopeAnalysis {
  status: ScopeStatus;
  confidence: number; // 0 – 100
  explanation: string;
  suggested_reply: string;
}

// ---------------------------------------------------------------------------
// Prompt
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `You are a freelance contract and scope analysis expert specialized in European B2B freelance work. Your job is to compare a client message against a contract and determine whether the request is within scope.

Rules:
- Be conservative. When in doubt, lean toward "unclear" rather than "in_scope".
- Do not hallucinate. Base your answer strictly on the contract text provided.
- If the contract is vague or does not address the request at all, return "unclear".
- The suggested_reply must be professional, calm, and non-confrontational. It should reference the contract without being accusatory.
- Return ONLY valid JSON. No markdown, no code fences, no prose outside the JSON object.

Output schema (strict):
{
  "status": "in_scope" | "out_of_scope" | "unclear",
  "confidence": <integer 0–100>,
  "explanation": "<one to three sentences explaining your reasoning>",
  "suggested_reply": "<professional email reply the freelancer can send>"
}`;

function buildUserPrompt(contractText: string, clientMessage: string): string {
  return `CONTRACT TEXT:
"""
${contractText.trim()}
"""

CLIENT MESSAGE:
"""
${clientMessage.trim()}
"""

Analyse whether the client message requests something that falls within or outside the contract scope. Return your answer as JSON only.`;
}

// ---------------------------------------------------------------------------
// OpenAI fetch wrapper
// ---------------------------------------------------------------------------
interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIChoice {
  message: { content: string };
  finish_reason: string;
}

interface OpenAIResponse {
  choices: OpenAIChoice[];
  error?: { message: string; type: string };
}

async function callOpenAI(messages: OpenAIMessage[]): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set in environment variables.");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages,
      temperature: 0.2, // low temperature → consistent, conservative output
      max_tokens: 1024,
      response_format: { type: "json_object" }, // enforces JSON output (gpt-4o / gpt-4o-mini)
    }),
  });

  const data: OpenAIResponse = await response.json();

  if (!response.ok || data.error) {
    throw new Error(
      `OpenAI API error: ${data.error?.message ?? response.statusText}`,
    );
  }

  const content = data.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  return content;
}

// ---------------------------------------------------------------------------
// JSON parsing + validation
// ---------------------------------------------------------------------------
function parseAndValidate(raw: string): ScopeAnalysis {
  let parsed: Record<string, unknown>;

  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error(`OpenAI response is not valid JSON: ${raw.slice(0, 200)}`);
  }

  const validStatuses: ScopeStatus[] = ["in_scope", "out_of_scope", "unclear"];

  const status = parsed.status as ScopeStatus;
  const confidence = Number(parsed.confidence);
  const explanation = parsed.explanation as string;
  const suggested_reply = parsed.suggested_reply as string;

  if (!validStatuses.includes(status)) {
    throw new Error(`Invalid status value from AI: "${parsed.status}"`);
  }
  if (isNaN(confidence) || confidence < 0 || confidence > 100) {
    throw new Error(`Invalid confidence value from AI: "${parsed.confidence}"`);
  }
  if (typeof explanation !== "string" || explanation.trim().length === 0) {
    throw new Error("Missing explanation in AI response.");
  }
  if (
    typeof suggested_reply !== "string" ||
    suggested_reply.trim().length === 0
  ) {
    throw new Error("Missing suggested_reply in AI response.");
  }

  return {
    status,
    confidence: Math.round(confidence),
    explanation: explanation.trim(),
    suggested_reply: suggested_reply.trim(),
  };
}

// ---------------------------------------------------------------------------
// Public function
// ---------------------------------------------------------------------------
export async function analyzeScope(
  contractText: string,
  clientMessage: string,
): Promise<ScopeAnalysis> {
  if (!contractText.trim()) {
    throw new Error("contractText must not be empty.");
  }
  if (!clientMessage.trim()) {
    throw new Error("clientMessage must not be empty.");
  }

  const messages: OpenAIMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: buildUserPrompt(contractText, clientMessage) },
  ];

  const raw = await callOpenAI(messages);
  return parseAndValidate(raw);
}
