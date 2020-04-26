import styled from 'styled-components';

const Container = styled.main`
  padding: ${({ theme }) => theme.variables.spacing * 3}px 0;
  flex: 1;
`;

export { Container };
