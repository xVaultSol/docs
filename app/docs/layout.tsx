import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
      <footer className="mx-auto mt-10 mb-4 flex w-full max-w-5xl items-center justify-end px-4 md:px-6">
        <a
          href="https://github.com/xVaultSol/docs"
          target="_blank"
          rel="noreferrer"
          aria-label="xVault docs GitHub repository"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3 py-2 text-sm text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-950"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.72.08-.72 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.24-.12-.31-.54-1.55.12-3.23 0 0 1.01-.33 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.23 3.29-1.23.67 1.68.25 2.92.13 3.23.77.85 1.24 1.93 1.24 3.24 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
          </svg>
          <span>GitHub</span>
        </a>
      </footer>
    </DocsLayout>
  );
}
