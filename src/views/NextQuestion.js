import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Container, Text, GradientText } from '../components';
import { roundState } from '../state/game';

function NextQuestion() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(3);
  const [round, setRound] = useRecoilState(roundState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        setRound(round + 1);
        navigate('/game', { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, navigate]);

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