import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, docsRoute } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
      url: '/',
    },
    themeSwitch: {
      enabled: false,
    },
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
