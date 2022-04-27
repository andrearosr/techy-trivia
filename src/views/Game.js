import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import questionsFx from '../fixtures/questions';
import { Screen, Container, Subtitle, Text, GradientText, Button } from '../components';
import Thick from '../assets/thick.png';

const AnswerContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-end;
`;

const TimerContainer = styled(Container)`
  height: 125px;
`;

const GradientTimer = styled(GradientText)`
  margin: 0;
`;

function Game() {
  const theme = useTheme();
  const [questions, setQuestions] = useState(questionsFx);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(15);

  function selectNextQuestion() {
    const index = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[index]);
  }

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }

      if (timer === 0) {
        selectNextQuestion();
        setSelectedAnswer(null);
        setTimer(15);
      }
    }, 1000);
  }, [timer]);

  useEffect(() => {
    selectNextQuestion();
  }, []);

  function pickAnswer(option) {
    return () => {
      if (!selectedAnswer) {
        setSelectedAnswer(option)
      }
    }
  }

  function getButtonFontColor(option) {
    return option === selectedAnswer ? 'black' : 'white'
  }

  function getButtonBackground(option) {
    if (selectedAnswer === null || option !== selectedAnswer) return theme.colors.gray;
    else if (selectedAnswer === currentQuestion.answer) return theme.colors.greenGradient;
    else return theme.colors.redGradient;
  }

  function renderAnswer() {
    if (selectedAnswer === null) {
      return (
        <Text>Selecciona una opción:</Text>
      );
    } else if (selectedAnswer === currentQuestion.answer) {
      return (
        <GradientText fontSize="30px" gradient="greenGradient">¡Correcto!</GradientText>
      );
    } else {
      return (
        <GradientText fontSize="30px" gradient="redGradient">¡Incorrecto!</GradientText>
      );
    }
  }

  if (!currentQuestion) return;
  return (
    <Screen footerSrc={Thick}>
      <Container>
        <Subtitle>
          {currentQuestion.title}
        </Subtitle>
      </Container>

      <Container center flex>
        <AnswerContainer>
          {renderAnswer()}
        </AnswerContainer>
        {currentQuestion.options.map((option, index) => (
          <>
            <Button
              key={window.btoa(option)}
              onClick={pickAnswer(index)}
              fontColor={getButtonFontColor(index)}
              background={getButtonBackground(index)}
            >
              {option}
            </Button>
            <br />
          </>
        ))}
        
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
            ¡Tiempo!
          </GradientTimer>
        )}
        
      </TimerContainer>
    </Screen>
  )
}

export default Game;