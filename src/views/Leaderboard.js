import styled from '@emotion/styled';
import { Container, Title, Text, Button } from '../components';
import TechyLogo from '../assets/techy.png';
import UruitLogo from '../assets/logo.png';
import { useRecoilState } from 'recoil';
import { isAdminState, leaderboardState } from '../state/game';

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const ScoreText = styled(Text)`
  :first-of-type {
    font-size: 28px;
    font-weight: 700;
    background: ${props => props.theme.colors.purpleGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  :nth-of-type(2) {
    font-size: 24px;
  }

  :nth-of-type(3) {
    font-size: 20px;
  }

  color: white;
`;

const Image = styled.img``;

function Leaderboard() {
  const [leaderboard] = useRecoilState(leaderboardState);
  const [isAdmin] = useRecoilState(isAdminState);

  return (
    <>
      <Container center flex>
        <Title>Puntuaciones:</Title>
        {leaderboard.map(player => (
          <ScoreText key={player.name}>
            {player.name} ({player.points} {player.points === 1 ? 'punto' : 'puntos'})
          </ScoreText>
        ))}
      </Container>

      {isAdmin && (
        <Container>
          <Button>
            Reiniciar
          </Button>
        </Container>
      )}

      <LogoContainer>
        <Image src={TechyLogo} alt="Techy por el dia" />
        <Image src={UruitLogo} alt="Uruit" />
      </LogoContainer>
    </>
  )
}

export default Leaderboard;