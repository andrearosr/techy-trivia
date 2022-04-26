import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Screen, Container, Title, Subtitle, Text, Button } from '../components';

function Start() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(-1);

  const start = () => setTimer(3);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
      if (timer === 0) navigate("/game", { replace: true })
    }, 1000);
  }, [timer, navigate]);

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