import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Global, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import socketIOClient from "socket.io-client";
import WebsocketClientContext from "./websocket_context/index";
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
  const [client, setClient] = useState();
  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_SERVER_URL);
    setClient(socket);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      <Root>
        <WebsocketClientContext.Provider value={client}>
          <Screen>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/start" element={<Start />} />
              <Route path="/game" element={<Game />} />
              <Route path="/next-question" element={<NextQuestion />} />
            </Routes>
          </Screen>
        </WebsocketClientContext.Provider>
      </Root>
    </ThemeProvider>
  );
}

export default App;
