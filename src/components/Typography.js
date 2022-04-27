import styled from '@emotion/styled';

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  margin: 10px 0;
  color: ${props => props.color || props.theme.colors.offWhite};
`;

const Subtitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  margin: 10px 0;
  color: ${props => props.color || props.theme.colors.offWhite};
`;

const Text = styled.p`
  font-weight: 400;
  margin: 10px 0;
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || props.theme.colors.lightGreen};
`;

const GradientText = styled.p`
  font-weight: 900;
  font-size: ${props => props.fontSize || '88px'};
  color: ${props => props.color || props.theme.colors.purple};
  margin: 10px 0;
  text-align: center;
  background: ${props => props.theme.colors[props.gradient] || props.theme.colors.purpleGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export { Title, Subtitle, Text, GradientText };