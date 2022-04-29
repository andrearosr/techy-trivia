import { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import * as Icon from '@emotion-icons/ionicons-sharp';
import { Container, Title, Subtitle, Text, Input, Button } from '../components';
import { isAdminState, playerState } from '../state/game';
import WebsocketContext from '../websocket_context';

const ErrorMessage = styled(Text)`
  align-self: flex-start;
  height: 14px;
`;

function Welcome() {
  const theme = useTheme();
  const navigate = useNavigate();
  const socket = useContext(WebsocketContext);
  const [search] = useSearchParams(); 
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminState);
  const [player, setPlayer] = useRecoilState(playerState);
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState();

  useEffect(() => {
    setIsAdmin(search.get('admin'));
  }, [search]);

  function handleChange(e) {
    setName(e.target.value);

    if (e.target.value) {
      setIsValid(true);
      setError();
    } else {
      setIsValid(false);
      setError('Debes completar esta información para poder continuar.')
    }
  }

  function handleButtonClick() {
    if (!isValid) {
      setError('Debes completar esta información para poder continuar.');
      return;
    }
    socket.emit('player_joined', name);
  }

  return (
    <>
      <Container center>
        <Title>¡Bienvenida!</Title>
        <Subtitle>¿Estás lista para jugar?</Subtitle>
      </Container>

      <Container center flex>
        <Text>Cuéntanos cómo te llamas...</Text>
        <Input
          value={name}
          onChange={handleChange}
          placeholder='Ingresa tu nombre aquí...'
        />
        <ErrorMessage fontSize="12px" color={theme.colors.red}>
          {error}
        </ErrorMessage>
      </Container>

      <Container>
        <Button
          disabled={!isValid}
          onClick={handleButtonClick}
        >
          Comencemos&nbsp;
          <Icon.ArrowForward size={18} />
        </Button>
      </Container>
    </>
  )
}

export default Welcome;