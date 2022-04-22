import { useState, useEffect } from 'react';
import { Screen, Container, Title, Subtitle, Text, Input, Button } from '../components';

function Game({ next }) {
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  return (
    <Screen>
      <Container>
        <Subtitle>
          Hedy Lamarr fue una inventora que creó un sistema que luego inspiraría el wifi. <br />
          ¿Qué otra profesión tenía?
        </Subtitle>
      </Container>

      <Container center>
        <Text>Selecciona una opción:</Text><br />
        <Button onClick={next}>Actriz de Hollywood</Button>
        <br />
        <Button onClick={next}>Física</Button>
        <br />
        <Button onClick={next}>Abogada</Button>
        <br />
      </Container>

      <Container center>
        <Text>{timer}</Text>
        <Text>segundos</Text>
      </Container>
    </Screen>
  )
}

export default Game;