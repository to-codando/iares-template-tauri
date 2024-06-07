import { TRoute, html, render } from 'iares';

import { AppDefault } from '@/components/AppDefault';
import { Home } from '@/components/Home';

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: '#/404',
    mount: ({ context }) => {
      render(html`<${AppDefault} title="404" />`, context);
    },
  },
  {
    regex: /^#\/$/,
    start: '#/',
    mount: ({ context }) => {
      render(html`<${Home} title="Detalhes da estação" />`, context);
    },
  },
];
