import styled from 'styled-components';

export const PrintLink = styled.a`
  color: inherit;

  display: none;

  @media print {
    margin-left: 4px;
    display: initial;
  }
`;
