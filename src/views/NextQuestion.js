import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Text, GradientText } from '../components';

function NextQuestion({}) {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        navigate('/game', { replace: true });
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      <Container center flex>
        <Text fontSize="24px" color="white">Siguiente pregunta en:</Text>
        <GradientText>
          {timer}
        </GradientText>
      </Container>
    </>
  )
}

export default NextQuestion;