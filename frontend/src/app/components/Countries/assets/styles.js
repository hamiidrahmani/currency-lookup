import styled from 'styled-components';
import { above } from '../../../theme/breakpoints';

const Container = styled.div`
  padding: ${({ theme }) => theme.variables.spacing}px;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 100%;

  ${above.xs} {
    max-width: 250px;
  }
`;

const SearchInput = styled.input.attrs({ type: 'text' })`
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  padding: ${({ theme }) => theme.variables.spacing}px;
  font-size: 1em;
  width: 100%;
`;

const SearchResult = styled.ul`
  position: absolute;
  max-height: 200px;
  width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey200};
`;

const SearchItem = styled.li`
  cursor: pointer;
  width: 100%;
  padding: ${({ theme }) => theme.variables.spacing}px;
  color: ${({ theme }) => theme.colors.grey400};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export { Container, SearchContainer, SearchInput, SearchResult, SearchItem };
