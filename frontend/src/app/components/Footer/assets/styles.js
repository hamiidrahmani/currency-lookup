import styled from 'styled-components';
import { above } from '../../../theme/breakpoints';

const Container = styled.div`
  min-height: ${({ theme }) => theme.variables.spacing * 4}px;
  padding: ${({ theme }) => theme.variables.spacing}px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  ${above.sm} {
    justify-content: flex-start;
  }
`;

export { Container };
