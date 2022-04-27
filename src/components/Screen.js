import styled from '@emotion/styled';

const Screen = styled.div`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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

export { Screen, Container };