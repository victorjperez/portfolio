import React from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
  background-color: var(--background-color);

  min-height: 100vh;

  @media (min-width: 1000px) {
    padding: 3.3rem 10rem;
  }
  @media print {
    padding: 0;
    background-color: unset;
    min-height: unset;
  }
`;

const Paper = styled.div`
  @media (min-width: 1000px) {
    max-width: 80rem;
  }

  margin: auto;
  padding-bottom: 2.5rem;
  background-color: var(--white);
  color: var(--black);
  border: 1px solid black;

  min-height: 80vh;
  @media (max-width: 999px) {
    min-height: 100vh;
  }

  @media print {
    padding-bottom: 0;
    border: none;
    background-color: unset;
  }
`;

export const Page = (props) => (
  <Background>
    <Paper {...props} />
  </Background>
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FeedbackText = styled.div`
  font-size: 24px;
  padding: 5rem 2rem;
  line-height: 1.4;
  text-align: center;

  animation-name: ${fadeIn};
  animation-delay: ${props => props.delay};
  animation-duration: 1s;
  animation-fill-mode: both;
  ${p => p.pulsate ? `
    animation-iteration-count: infinite;
    animation-direction: alternate;
  ` : ''}

  a {
    color: var(--main-color);
  }
`;

export const LoadingMessage = (props) => (
  <Background>
    <Paper>
      <FeedbackText delay="200ms" pulsate={true} {...props} />
    </Paper>
  </Background>
);

export const ErrorMessage = (props) => (
  <Background>
    <Paper>
      <FeedbackText delay="0" {...props} />
    </Paper>
  </Background>
);
