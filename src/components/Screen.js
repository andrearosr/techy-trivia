import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Thin from '../assets/thin.png';

const ScreenContainer = styled.div`
  padding: 100px 20px 50px;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-height: 750px) {
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
  transform: translateX(-50%);
  z-index: 0;
  width: 100%;
  max-width: 400px;
`;

const BackgroundHeader = styled.img`
  ${ImageStyles};
  top: 0;
`;

const BackgroundFooter = styled.img`
  ${ImageStyles};
  bottom: 0;
`;

function Screen({ headerSrc = Thin, footerSrc, children }) {
  return (
    <ScreenContainer>
      {headerSrc && <BackgroundHeader src={headerSrc} alt="" />}
      {footerSrc && <BackgroundFooter src={footerSrc} alt="" />}
      <ScreenContent>
        {children}
      </ScreenContent>
    </ScreenContainer>
  )
}

export { Screen, Container };