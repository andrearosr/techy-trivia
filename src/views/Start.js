import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import Logo from '../assets/iso.png';
import { Container, Title, Subtitle, GradientText, Button } from '../components';
import { spin } from '../GlobalStyles';
import { isAdminState } from '../state/game';
import WebsocketContext from '../websocket_context';

const LogoSpin = styled.img`
  animation: ${spin} 3s ease-in-out infinite;
`;

function Start() {
  const navigate = useNavigate();
  const socket = useContext(WebsocketContext);
  const [timer, setTimer] = useState(-1);
  const [isAdmin] = useRecoilState(isAdminState);

  const start = () => {
    socket.emit("ready");
  }

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
      if (timer === 0) navigate("/game", { replace: true })
    }, 1000);
  }, [timer, navigate]);

  useEffect(() => {
    socket.on('start', () => {
      if (timer < 0) setTimer(3);
    })
  }, []);

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

      {timer < 0 && isAdmin && (
        <Button onClick={start}>
          Comenzar
        </Button>
      )}
    </>
  )
}

export default Start;