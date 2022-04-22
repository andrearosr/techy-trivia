import styled from '@emotion/styled';

const Screen = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
  width: 100%;
  max-width: 400px;
`;

export { Screen, Container };