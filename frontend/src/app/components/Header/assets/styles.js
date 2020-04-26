import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.variables.spacing}px;
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  max-height: 40px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2em;
  margin: ${({ theme }) => theme.variables.spacing}px;
`;

const LanguageContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Language = styled.li`
  a {
    border-bottom: 1px solid transparent;
    padding: ${({ theme }) => theme.variables.spacing}px;
    color: ${({ theme }) => theme.colors.primary};

    &.active {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export { Container, LogoContainer, Logo, Title, LanguageContainer, Language };
