import styled from '@emotion/styled';

const Screen = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.center ? 'center' : 'flex-start'};
`;

export { Screen, Container };