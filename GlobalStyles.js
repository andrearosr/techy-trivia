const GlobalStyles = css`
  * {
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-weight: 200;
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

    greenGradient: 'linear-gradient(180deg, #1CE7C0 0%, #32BACE 100%)',
    redGradient: 'linear-gradient(180deg, #F7C7C4 0%, #EE7878 100%)',
    purpleGradient: 'linear-gradient(180deg, #582FDD 19.23%, #4F7DE0 90.11%)',
  }
};

export { GlobalStyles, Theme };