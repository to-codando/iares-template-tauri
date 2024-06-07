import { css, html } from 'iares';

export const template = () => html`
  <div class="wrap-ctx">
    <router-view />
  </div>
`;

export const AppMain = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
