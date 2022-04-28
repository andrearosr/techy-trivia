import styled from '@emotion/styled';
import { Container, Title, Text } from '../components';
import TechyLogo from '../assets/techy.png';
import UruitLogo from '../assets/logo.png';
import { useRecoilState } from 'recoil';
import { leaderboardState } from '../state/game';

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Image = styled.img``;

function Leaderboard() {
  const [leaderboard] = useRecoilState(leaderboardState);

  return (
    <>
      <Container center flex>
        <Title>Puntuaciones:</Title>
        {leaderboard.map(player => (
          <Text>{player.name}: {player.points}</Text>
        ))}
      </Container>

      <LogoContainer>
        <Image src={TechyLogo} alt="Techy por el dia" />
        <Image src={UruitLogo} alt="Uruit" />
      </LogoContainer>
    </>
  )
}

export default Leaderboard;