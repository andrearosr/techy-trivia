import styled from '@emotion/styled';

const Input = styled.input`
  height: 45px;
  width: 100%;
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid black;
  font-weight: 400;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: 0.5s;
  
  background: ${props => props.background || props.theme.colors.green};
  color: ${props => props.fontColor || 'black'};
`;

export { Input, Button };