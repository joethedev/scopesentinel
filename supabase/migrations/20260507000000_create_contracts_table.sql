-- =============================================================================
-- ScopeGuard — contracts table (already exists in Supabase with this schema)
-- Real schema reference:
--
--   create table public.contracts (
--     id           uuid not null default gen_random_uuid(),
--     user_id      uuid not null,
--     title        text not null,
--     description  text null,
--     contract_text text not null,
--     client_name  text null,
--     project_name text null,
--     created_at   timestamptz not null default now(),
--     updated_at   timestamptz not null default now(),
--     constraint contracts_pkey primary key (id),
--     constraint contracts_user_id_fkey foreign key (user_id)
--       references users (id) on delete cascade
--   );
--
-- RLS policies (run if not already applied):
-- =============================================================================

alter table public.contracts enable row level security;

create policy if not exists "contracts: select own"
  on public.contracts for select
  using (user_id = public.current_user_id());

create policy if not exists "contracts: insert own"
  on public.contracts for insert
  with check (user_id = public.current_user_id());

create policy if not exists "contracts: update own"
  on public.contracts for update
  using (user_id = public.current_user_id());

create policy if not exists "contracts: delete own"
  on public.contracts for delete
  using (user_id = public.current_user_id());

-- Indexes
create index if not exists contracts_user_id_idx
  on public.contracts (user_id);

create index if not exists contracts_user_id_created_at_idx
  on public.contracts (user_id, created_at desc);

-- =============================================================================
-- Add contract_id FK to scope_checks (run this — likely not applied yet)
-- =============================================================================

alter table public.scope_checks
  add column if not exists contract_id uuid
    references public.contracts (id)
    on delete set null;

create index if not exists scope_checks_contract_id_idx
  on public.scope_checks (contract_id);

