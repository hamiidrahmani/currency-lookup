import styled from 'styled-components';

const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.grey200};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
`;

export { Container };
