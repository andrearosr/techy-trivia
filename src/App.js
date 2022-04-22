import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import Welcome from './views/Welcome';
import Start from './views/Start';
import Game from './views/Game';

const Root = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

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

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`

function App() {
  const [screen, setScreen] = useState(0);

  return (
    <RecoilRoot>
      <Global styles={GlobalStyles} />
      <Root>
        {screen === 0 && <Welcome next={() => setScreen(1)} />}
        {screen === 1 && <Start next={() => setScreen(2)} />}
        {screen === 2 && <Game />}
      </Root>
    </RecoilRoot>
  );
}

export default App;
