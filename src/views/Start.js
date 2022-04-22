import { useState, useEffect } from 'react';
import { Screen, Container, Title, Subtitle, Text, Input, Button } from '../components';

function Start({ next }) {
  const [timer, setTimer] = useState(-1);

  const start = () => setTimer(3);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
      if (timer === 0) next()
    }, 1000);
  }, [timer]);

  return (
    <Screen>
      <Container>
        <Title>Ya casi estamos</Title>
        <Subtitle>Espera un momento mientras todas las personas se alistan para jugar...</Subtitle>
      </Container>

      {timer < 0 && (
        <Button onClick={start}>
          Comenzar
        </Button>
      )}
      
      {timer > 0 && <Text>{timer}</Text>}

      {timer === 0 && <Text>¡Empezamos!</Text>}
      
    </Screen>
  )
}

export default Start;