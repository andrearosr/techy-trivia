import styled from '@emotion/styled';
import { Container, Title, Text, Button, GradientText, Subtitle } from '../components';
import TechyLogo from '../assets/techy.png';
import UruitLogo from '../assets/logo.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderedLeaderboardState, playerState } from '../state/game';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [player] = useRecoilState(playerState);
  const leaderboard = useRecoilValue(orderedLeaderboardState);

  const handleRestart = () => {
    navigate('/');
  }

  console.log(leaderboard)

  return (
    <>
      <Container center flex>
        <Title>Tu puntuación:</Title>
        <GradientText>
          {player.points}
        </GradientText>
        {leaderboard.length > 1 && (
          <>
            <Subtitle>Puntuaciones:</Subtitle>
            {leaderboard.map(p => (
              <ScoreText key={p.name}>
                {p.name} ({p.points} {p.points === 1 ? 'punto' : 'puntos'})
              </ScoreText>
            ))}
          </>
        )}
        
      </Container>

      <Container>
        <Button onClick={handleRestart}>
          Reiniciar
        </Button>
      </Container>

      <LogoContainer>
        <Image src={TechyLogo} alt="Techy por el dia" />
        <Image src={UruitLogo} alt="Uruit" />
      </LogoContainer>
    </>
  )
}

export default Leaderboard;