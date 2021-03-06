import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import questionsFx from '../fixtures/questions';
import { Container, Subtitle, Text, GradientText, Button } from '../components';
import { playerState, roundState } from '../state/game';

const AnswerContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-end;
`;

const AnswerText = styled(Text)`
  height: 16px;
  font-size: 14px;
  color: white;
  margin: 0;
`;

const TimerContainer = styled(Container)`
  height: 125px;
`;

const GradientTimer = styled(GradientText)`
  margin: 0;
`;

function Game() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [round, setRound] = useRecoilState(roundState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(15);

  const question = questionsFx[round];
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        setTimer(-1);
        navigate('/next-question', { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, round, setRound, navigate]);

  function pickAnswer(option) {
    return () => {
      if (!selectedAnswer) {
        const point = option === question.answer ? 1 : 0;
        setSelectedAnswer(option);
        setPlayer({
          ...player,
          points: player.points + point,
        });
      }
    }
  }

  function getButtonFontColor(option) {
    return option === selectedAnswer ? 'black' : 'white'
  }

  function getButtonBackground(option) {
    if (selectedAnswer === null || option !== selectedAnswer) return theme.colors.gray;
    else if (selectedAnswer === question.answer) return theme.colors.greenGradient;
    else return theme.colors.redGradient;
  }

  function renderAnswer() {
    if (selectedAnswer === null) {
      return (
        <Text>Selecciona una opci??n:</Text>
      );
    }
    
    if (selectedAnswer === question.answer) {
      return (
        <GradientText fontSize="30px" gradient="greenGradient">??Correcto!</GradientText>
      );
    }

    return (
      <GradientText fontSize="30px" gradient="redGradient">??Incorrecto!</GradientText>
    );
  }

  if (!question || timer < 0) return;
  return (
    <>
      <Container>
        <Subtitle>
          {question.title}
        </Subtitle>
      </Container>

      <Container center flex>
        <AnswerContainer>
          {renderAnswer()}
        </AnswerContainer>
        {question.options.map((option, index) => (
          <Fragment key={option}>
            <Button
              onClick={pickAnswer(index)}
              fontColor={getButtonFontColor(index)}
              background={getButtonBackground(index)}
            >
              {option}
            </Button>
            <br />
          </Fragment>
        ))}
          <AnswerText>
            {selectedAnswer !== null && selectedAnswer !== question.answer &&
              `Respuesta correcta: ${question.options[question.answer]}`
            }
          </AnswerText>
      </Container>

      <TimerContainer center>
        {timer > 0 && (
          <>
            <GradientTimer>
              {timer}
            </GradientTimer>
            <GradientTimer fontSize="16px">
              {timer === 1 ? 'segundo' : 'segundos'}
            </GradientTimer>
          </>
        )}

        {timer === 0 && (
          <GradientTimer fontSize="40px">
            ??Tiempo!
          </GradientTimer>
        )}
        
      </TimerContainer>
    </>
  )
}

export default Game;