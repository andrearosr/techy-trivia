import { useState } from 'react';
import { Screen, Container, Title, Subtitle, Text, Input, Button } from '../components';

function Welcome() {
  return (
    <Screen>
      <Container center>
        <Title>¡Bienvenida!</Title>
        <Subtitle>¿Estás lista para jugar?</Subtitle>
      </Container>

      <Container center>
        <Text>Cuéntanos cómo te llamas...</Text>
        <Input
          placeholder='Ingresa tu nombre aquí...'
        />
      </Container>

      <Container>
        <Button>Comencemos</Button>
      </Container>
    </Screen>
  )
}

export default Welcome;