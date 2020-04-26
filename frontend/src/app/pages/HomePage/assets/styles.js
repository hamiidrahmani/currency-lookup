import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.grey100};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export { Container };
