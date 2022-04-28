import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Container, Text, GradientText, Subtitle, Title } from '../components';
import { roundState } from '../state/game';
import WebsocketClientContext from '../websocket_context';

const ROUNDS_INDEX = 9;

function NextQuestion() {
  const navigate = useNavigate();
  const socket = useContext(WebsocketClientContext);
  const [timer, setTimer] = useState(3);
  const [round, setRound] = useRecoilState(roundState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        if (round < ROUNDS_INDEX) {
          setRound(round + 1);
          navigate('/game', { replace: true });
        } else {
          socket.emit('end');
          navigate('/leaderboard', { replace: true });
        }
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, navigate]);

  return (
    <>
      <Container center flex>
        {round < ROUNDS_INDEX && (
          <Text fontSize="24px" color="white">
            Siguiente pregunta en:
          </Text>
        )}
        
        {round === ROUNDS_INDEX && (
          <Container center flex>
            <Title>¡Eso es todo!</Title>
            <Subtitle>Veamos los resultados...</Subtitle>
          </Container>
        )}
        <GradientText>
          {timer}
        </GradientText>
      </Container>
    </>
  )
}

export default NextQuestion;