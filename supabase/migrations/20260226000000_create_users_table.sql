-- =============================================================================
-- ScopeGuard MVP — full schema
-- Run in your Supabase SQL editor or push via `supabase db push`.
--
-- RLS note: policies use (auth.jwt() ->> 'sub') which maps to the Clerk user ID
-- when you configure a Clerk JWT template in Supabase with the "sub" claim set
-- to the Clerk user ID.  The service-role key used server-side bypasses RLS.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- 1. users
-- -----------------------------------------------------------------------------
create table if not exists public.users (
  id          uuid        primary key default gen_random_uuid(),
  clerk_id    text        unique not null,
  email       text        not null,
  full_name   text,
  avatar_url  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Fast lookup by Clerk ID on every authenticated request
create index if not exists users_clerk_id_idx
  on public.users (clerk_id);

alter table public.users enable row level security;

create policy "users: select own"
  on public.users for select
  using (clerk_id = (auth.jwt() ->> 'sub'));

create policy "users: insert own"
  on public.users for insert
  with check (clerk_id = (auth.jwt() ->> 'sub'));

create policy "users: update own"
  on public.users for update
  using (clerk_id = (auth.jwt() ->> 'sub'));

create policy "users: delete own"
  on public.users for delete
  using (clerk_id = (auth.jwt() ->> 'sub'));


-- -----------------------------------------------------------------------------
-- 2. scope_checks
-- -----------------------------------------------------------------------------
create table if not exists public.scope_checks (
  id               uuid           primary key default gen_random_uuid(),
  user_id          uuid           not null
                                    references public.users (id)
                                    on delete cascade,
  contract_text    text           not null,
  client_message   text           not null,
  result_status    text           not null
                                    check (result_status in ('in_scope', 'out_of_scope', 'unclear')),
  ai_explanation   text,
  suggested_reply  text,
  confidence_score numeric(5, 2)  check (confidence_score between 0 and 100),
  created_at       timestamptz    not null default now()
);

-- Primary access pattern: all checks belonging to a user
create index if not exists scope_checks_user_id_idx
  on public.scope_checks (user_id);

-- Useful for time-ordered listing per user
create index if not exists scope_checks_user_id_created_at_idx
  on public.scope_checks (user_id, created_at desc);

alter table public.scope_checks enable row level security;

-- Helper: resolve the internal users.id from the Clerk JWT sub claim
create or replace function public.current_user_id()
returns uuid
language sql
stable
as $$
  select id from public.users where clerk_id = (auth.jwt() ->> 'sub') limit 1;
$$;

create policy "scope_checks: select own"
  on public.scope_checks for select
  using (user_id = public.current_user_id());

create policy "scope_checks: insert own"
  on public.scope_checks for insert
  with check (user_id = public.current_user_id());

create policy "scope_checks: update own"
  on public.scope_checks for update
  using (user_id = public.current_user_id());

create policy "scope_checks: delete own"
  on public.scope_checks for delete
  using (user_id = public.current_user_id());

-- Service role bypasses RLS — used by the server-side Supabase client.
