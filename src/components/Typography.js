import styled from '@emotion/styled';

const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  margin: 10px 0;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  margin: 10px 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 10px 0;
  color: ${props => props.color || props.theme.green};
`;

export { Title, Subtitle, Text };