import styled from 'styled-components';

const Container = styled.div`
  padding: ${({ theme }) => theme.variables.spacing}px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: inline-block;
  width: ${({ theme }) => theme.variables.spacing * 3}px;
  height: ${({ theme }) => theme.variables.spacing * 3}px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const Text = styled.span`
  margin-left: ${({ theme }) => theme.variables.spacing}px;
`;

export { Container, Icon, Text };
