import Link from 'next/link';
import { ArrowRight, Binary, ChartNoAxesCombined, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-(--fd-layout-width) flex-1 flex-col gap-10 px-4 py-8 md:px-6 md:py-12">
      <section className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(222,245,239,0.72))] shadow-[0_30px_90px_rgba(20,24,24,0.1)]">
        <div className="grid gap-0 border-b border-black/10 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-teal-700">
              XVAULT DOCUMENTATION
            </p>
            <div className="mt-6 space-y-4">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-950 md:text-7xl">
                Tokenized equity vaults on Solana.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">
                xVault combines Token-2022 xStocks, keeper-driven rebalancing, oracle-backed NAV,
                and VLT reward distribution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Read the docs
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/docs/onchain/program-ids"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-950"
              >
                Program IDs
                <Binary className="size-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between bg-zinc-950 p-8 text-zinc-50 md:p-10">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-teal-300">AT A GLANCE</p>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
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
          className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <ChartNoAxesCombined className="size-5 text-teal-700" />
          <h2 className="mt-4 text-xl font-semibold text-zinc-950">Protocol overview</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Product scope, vault model, user flows, and why Scaled UI math is non-negotiable.
          </p>
        </Link>
        <Link
          href="/docs/operations/keeper-and-oracles"
          className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Binary className="size-5 text-teal-700" />
          <h2 className="mt-4 text-xl font-semibold text-zinc-950">Keeper and oracle ops</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            Job cadence, xChange quote lifecycle, NAV freshness, and fallback rules.
          </p>
        </Link>
        <Link
          href="/docs/security/invariants"
          className="rounded-[1.5rem] border border-black/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <ShieldCheck className="size-5 text-teal-700" />
          <h2 className="mt-4 text-xl font-semibold text-zinc-950">Security invariants</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-700">
            State guards, pause conditions, operational controls, and the compliance boundary.
          </p>
        </Link>
      </section>
    </main>
  );
}
