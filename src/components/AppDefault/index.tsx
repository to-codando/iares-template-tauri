import { css, html } from 'iares';

export const template = () => html`
  <div class="wrap-ctx">
    <h1>404 - Página não encontrada</h1>
    <a href="#/">Voltar</a>
  </div>
`;

export const AppDefault = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-default,
  .wrap-ctx,
  .wrap-ctx h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  .wrap-ctx h1 {
    margin-bottom: 1em;
  }

  app-default a {
    color: blue;
    padding: 1em;
    background: #ebebeb;
  }
`;
