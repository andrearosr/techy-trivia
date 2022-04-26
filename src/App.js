import { RecoilRoot } from 'recoil';
import { Routes, Route } from "react-router-dom";
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

  a {
    text-decoration: none;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`

function App() {
  return (
    <RecoilRoot>
      <Global styles={GlobalStyles} />
      <Root>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/start" element={<Start />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Root>
    </RecoilRoot>
  );
}

export default App;
