import { css } from '@emotion/react';

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`

const Theme = {
  colors: {
    lightGreen: '#A3E0D4',
    green: '#1CE8C1',
    red: '#F47575',
    purple: '#582FDD',
    gray: '#3C3C3C',
    lightGray: '#969696',
    offWhite: '#DBDBDB',

    greenGradient: 'linear-gradient(180deg, #1CE7C0 0%, #32BACE 100%)',
    redGradient: 'linear-gradient(180deg, #F7C7C4 0%, #EE7878 100%)',
    purpleGradient: 'linear-gradient(180deg, #582FDD 19.23%, #4F7DE0 90.11%)',
  }
};

export { GlobalStyles, Theme };