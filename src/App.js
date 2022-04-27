import { RecoilRoot } from 'recoil';
import { Routes, Route } from "react-router-dom";
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { GlobalStyles, Theme } from './GlobalStyles';
import { Screen } from './components';
import Welcome from './views/Welcome';
import Start from './views/Start';
import Game from './views/Game';
import NextQuestion from './views/NextQuestion';

const Root = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyles} />
        <Root>
          <Screen>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/start" element={<Start />} />
              <Route path="/game" element={<Game />} />
              <Route path="/next-question" element={<NextQuestion />} />
            </Routes>
          </Screen>
        </Root>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
