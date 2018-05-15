import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #1d1415;
  --main-color: #2d6558;
  --white: #e5e5e5;

  @media (min-width: 1000px) {
    padding: 33px 100px;
  }
`;

const Paper = styled.div`
  @media (min-width: 1000px) {
    max-width: 800px;
  }

  margin: auto;
  padding-bottom: 25px;
  background-color: var(--white);
  color: #1e1e1e;
`;

export const Page = (props) => (
  <Background>
    <Paper {...props} />
  </Background>
);
