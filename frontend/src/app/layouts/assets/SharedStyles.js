import styled from 'styled-components';
import { above } from '../../theme/breakpoints';

const MainWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;

  ${above.xs} {
    max-width: 960px;
  }
`;

const Table = styled.table`
  padding: ${({ theme }) => theme.variables.spacing}px;
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.variables.spacing * 2}px;
`;

const Thead = styled.thead`
  font-weight: bold;

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Tbody = styled.tbody`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
  }
`;

const Row = styled.tr`
  padding: ${({ theme }) => theme.variables.spacing}px;
`;

const Column = styled.td`
  padding: ${({ theme }) => theme.variables.spacing}px;
`;

export { MainWrapper, Table, Thead, Tbody, Row, Column };
