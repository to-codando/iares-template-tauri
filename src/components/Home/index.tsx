import { css, html } from 'iares';

export const template = () => html`
  <div class="wrap-ctx">
    <h1>IARES Home Page</h1>
    <a href="#/asf">Other</a>
  </div>
`;

export const Home = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  home,
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

  home a {
    color: blue;
    padding: 1em;
    background: #ebebeb;
  }
`;
