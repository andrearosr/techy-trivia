import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Thin from '../assets/thin.png';
import Thick from '../assets/thick.png';

const ScreenContainer = styled.div`
  padding: 40px 30px 100px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-height: 660px) {
    padding-top: 80px;
  }

  @media (min-height: 1024px) {
    padding-top: 150px;
  }
`;

const ScreenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  z-index: 1;
`;

const Container = styled.div`
  flex: ${props => props.flex ? 1 : 'initial'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  justify-content: center;
  width: 100%;
  max-width: 400px;
`;

const ImageStyles = css`
  position: absolute;
  left: 50%;
  z-index: 0;
  width: 100%;
  max-width: 400px;
`;

const BackgroundHeader = styled.img`
  ${ImageStyles};
  top: 0;
  transform: translateX(-50%);
`;

const BackgroundFooter = styled.img`
  ${ImageStyles};
  bottom: 0;
  transform: translateX(-50%) ${props => props.rotate ? 'rotate(180deg)' : 'none'};
`;

function Screen({ children }) {
  const location = useLocation();
  const gamePattern = /(game|start|next-question)/g;
  const leaderboardPattern = /(leaderboard)/g;
  let footerSrc = '';
  let rotate = false;

  if (gamePattern.test(location.pathname)) {
    footerSrc = Thick;
  }

  if (leaderboardPattern.test(location.pathname)) {
    footerSrc = Thin;
    rotate = true;
  }

  return (
    <ScreenContainer>
      <BackgroundHeader src={Thin} alt="" />
      <BackgroundFooter src={footerSrc} rotate={rotate} alt="" />
      <ScreenContent>
        {children}
      </ScreenContent>
    </ScreenContainer>
  )
}

export { Screen, Container };