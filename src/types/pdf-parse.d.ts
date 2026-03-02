// Type declaration for the direct lib import used to avoid pdf-parse's
// built-in test-file side-effect when bundled by Next.js.
declare module "pdf-parse/lib/pdf-parse.js" {
  interface PDFInfo {
    PDFFormatVersion?: string;
    IsAcroFormPresent?: boolean;
    IsXFAPresent?: boolean;
    [key: string]: unknown;
  }

  interface PDFData {
    numpages: number;
    numrender: number;
    info: PDFInfo;
    metadata: unknown;
    version: string;
    text: string;
  }

  interface Options {
    pagerender?: (pageData: unknown) => Promise<string>;
    max?: number;
    version?: string;
  }

  function pdfParse(
    dataBuffer: Buffer | Uint8Array,
    options?: Options,
  ): Promise<PDFData>;
  export = pdfParse;
}
