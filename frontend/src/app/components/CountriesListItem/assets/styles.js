import styled from 'styled-components';

const SEKInput = styled.input.attrs({ type: 'number' })`
  padding: ${({ theme }) => theme.variables.spacing}px;
`;

export { SEKInput };
