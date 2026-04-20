import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Binary, ChartNoAxesCombined, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-(--fd-layout-width) flex-1 flex-col gap-10 px-4 py-8 md:px-6 md:py-12">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-[color:var(--border)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        {/* Banner backdrop */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/brand/banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020]/90 via-[#1a2744]/75 to-[#dc2f4a]/40" />
        </div>

        <div className="grid gap-0 border-b border-white/10 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-[color:var(--accent)]">
              XVAULT DOCUMENTATION
            </p>
            <div className="mt-6 space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
                Tokenized equity vaults on Solana.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                xVault combines Token-2022 xStocks, keeper-driven rebalancing, oracle-backed NAV,
                and VLT reward distribution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-5 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(220,47,74,0.35)] transition hover:bg-[color:var(--primary-hover)]"
              >
                Read the docs
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs/onchain/program-ids"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-[color:var(--accent)] hover:text-white"
              >
                Program IDs
                <Binary className="size-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-[#0b1020]/80 p-8 text-white backdrop-blur md:p-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:var(--accent)]">
                AT A GLANCE
              </p>
              <p className="mt-4 text-sm leading-6 text-white/70">
                v1 routes market-hours rebalances through Backed xChange and falls back to Jupiter
                off-hours or on atomic halts. NAV always uses raw amount × multiplier × price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          href="/docs/protocol/overview"
          className="group rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--primary)]/50 hover:shadow-[0_20px_60px_rgba(220,47,74,0.15)]"
        >
          <ChartNoAxesCombined className="size-5 text-[color:var(--accent)]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Protocol overview</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Product scope, vault model, user flows, and why Scaled UI math is non-negotiable.
          </p>
        </Link>
        <Link
          href="/docs/operations/keeper-and-oracles"
          className="group rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--primary)]/50 hover:shadow-[0_20px_60px_rgba(220,47,74,0.15)]"
        >
          <Binary className="size-5 text-[color:var(--accent)]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Keeper and oracle ops</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Job cadence, xChange quote lifecycle, NAV freshness, and fallback rules.
          </p>
        </Link>
        <Link
          href="/docs/security/invariants"
          className="group rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface)]/60 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:border-[color:var(--primary)]/50 hover:shadow-[0_20px_60px_rgba(220,47,74,0.15)]"
        >
          <ShieldCheck className="size-5 text-[color:var(--accent)]" />
          <h2 className="mt-4 text-xl font-semibold text-white">Security invariants</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            State guards, pause conditions, operational controls, and the compliance boundary.
          </p>
        </Link>
      </section>
    </main>
  );
}
