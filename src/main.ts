import { environment } from 'env';
import { createApp, html, render, router } from 'iares';
import { AppMain } from '@/components/AppMain';
import { routes } from './routes';

export const appHost = createApp({
  onMount(context) {
    render(html`<${AppMain} />`);
    router({ routes, context }).init();
  },
});

if (environment === 'development') {
  new EventSource('/esbuild').addEventListener('change', () =>
    location.reload()
  );
}
