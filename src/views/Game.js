import { useState, useEffect } from 'react';
import questionsFx from '../fixtures/questions';
import { Screen, Container, Subtitle, Text, Button } from '../components';

function Game({ next }) {
  const [questions, setQuestions] = useState(questionsFx);
  const [selectedQuestion, setSelectedQuestion] = useState();
  const [timer, setTimer] = useState(15);

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
    }, 1000);
  }, [timer]);

  useEffect(() => {
    const index = Math.floor(Math.random() * (questions.length - 1));
    setSelectedQuestion(questions[index]);
  }, []);

  if (!selectedQuestion) return;
  return (
    <Screen>
      <Container>
        <Subtitle>
          {selectedQuestion.title}
        </Subtitle>
      </Container>

      <Container center>
        <Text>Selecciona una opción:</Text><br />
        {selectedQuestion.options.map(option => (
          <>
            <Button onClick={next}>{option}</Button>
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