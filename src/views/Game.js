import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import questionsFx from '../fixtures/questions';
import { Screen, Container, Subtitle, Text, Button } from '../components';

const AnswerContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: flex-end;
`;

function Game() {
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

  function renderAnswer() {
    if (selectedAnswer === null) {
      return (<Text>Selecciona una opción:</Text>)
    } else if (selectedAnswer === currentQuestion.answer) {
      return (<Text>¡Correcto!</Text>)
    } else {
      return (<Text>¡Incorrecto!</Text>)
    }
  }

  if (!currentQuestion) return;
  return (
    <Screen>
      <Container>
        <Subtitle>
          {currentQuestion.title}
        </Subtitle>
      </Container>

      <Container center>
        <AnswerContainer>
          {renderAnswer()}
        </AnswerContainer>
        {currentQuestion.options.map((option, index) => (
          <>
            <Button onClick={pickAnswer(index)} key={window.btoa(option)}>
              {option}
            </Button>
            <br />
          </>
        ))}
        
      </Container>

      <Container center>
        <Text>{timer}</Text>
        <Text>segundos</Text>
      </Container>
    </Screen>
  )
}

export default Game;