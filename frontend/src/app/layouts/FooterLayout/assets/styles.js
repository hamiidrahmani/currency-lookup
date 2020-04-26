import styled from 'styled-components';

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey200};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
`;

export { Container };
