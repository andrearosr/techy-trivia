import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import Logo from '../assets/iso.png';
import { Container, Title, Subtitle, GradientText, Button } from '../components';
import { spin } from '../GlobalStyles';

const LogoSpin = styled.img`
  animation: ${spin} 3s ease-in-out infinite;
`;

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
    <>
      <Container flex>
        <Title>Ya casi estamos</Title>
        <Subtitle>
          {timer >= 0 && "El juego consiste en responder todas las preguntas, la participante que conteste mayor cantidad de preguntas correctas será la ganadora"}
          {timer < 0 && "Espera un momento mientras todas las personas se alistan para jugar..."}
        </Subtitle>
      </Container>

      <Container center flex>
        {timer < 0 && <LogoSpin src={Logo} alt="Loading spinner" />}

        {timer > 0 && <GradientText>{timer}</GradientText>}

        {timer === 0 && <GradientText fontSize="40px">¡Empezamos!</GradientText>}
      </Container>

      {timer < 0 && (
        <Button onClick={start}>
          Comenzar
        </Button>
      )}
    </>
  )
}

export default Start;