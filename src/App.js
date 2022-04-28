import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { useRecoilState } from 'recoil';
import { leaderboardState, playerState, roundState } from './state/game';
import Leaderboard from './views/Leaderboard';

const Root = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App() {
  const navigate = useNavigate();
  const [client, setClient] = useState();
  const [player, setPlayer] = useRecoilState(playerState);
  const [leaderboard, setLeaderboard] = useRecoilState(leaderboardState);
  const [round, setRound] = useRecoilState(roundState);

  useEffect(() => {
    const socket = socketIOClient(process.env.REACT_APP_SERVER_URL);
    setClient(socket);

    socket.on('player_added', (id) => {
      setPlayer({
        ...player,
        id,
      });
    });

    socket.on('game_ended', (leaderboard) => {
      setLeaderboard(leaderboard);
    });

    socket.on('start_over', () => {
      setRound(0);
      navigate('/start');
    });
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
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Screen>
        </WebsocketClientContext.Provider>
      </Root>
    </ThemeProvider>
  );
}

export default App;
