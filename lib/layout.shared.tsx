import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, docsRoute } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-semibold">
          <Image
            src="/brand/XVault.png"
            alt=""
            width={28}
            height={28}
            priority
            className="h-7 w-7 rounded-md ring-1 ring-[color:var(--border)]"
          />
          <span className="brand-text-gradient">{appName}</span>
        </span>
      ),
      url: '/',
    },
    themeSwitch: {
      enabled: false,
    },
    githubUrl: 'https://github.com/xVaultSol/docs',
    links: [
      {
        text: 'Docs',
        url: docsRoute,
        active: 'nested-url',
      },
      {
        text: 'Protocol',
        url: '/docs/protocol/overview',
        active: 'nested-url',
      },
      {
        text: 'Program IDs',
        url: '/docs/onchain/program-ids',
        active: 'nested-url',
      },
    ],
  };
}
