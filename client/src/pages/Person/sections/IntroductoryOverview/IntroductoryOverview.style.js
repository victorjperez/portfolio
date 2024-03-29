import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    background-color: var(--main-color);
  }
  @media (min-width: 768px) {
    padding-top: 2.5rem;
  }
  @media print {
    padding-top: 0;
    flex-direction: row;
    background-color: unset;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-left: 3rem;
  }
  @media print {
    margin-right: 2rem;
    margin-left: 0;
  }

  .print-button {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  min-width: ${p => p.sizePx/10}rem;
  max-width: ${p => p.sizePx/10}rem;
  min-height: ${p => p.sizePx/10}rem;
  max-height: ${p => p.sizePx/10}rem;

  filter: grayscale(0.5);

  @media (max-width: 767px) {
    border: .3rem solid var(--white);
    margin: 3.3rem 1.5rem 1rem;
  }
  @media (min-width: 768px) {
    margin: 2rem 0;
  }
  @media print {
    height: 140px;
    width: 140px;
    margin: 2rem 0;
    border: none;
  }
`;

export const Description = styled.div`
  background-color: var(--main-color);
  color: var(--white);
  padding: 2rem;

  @media print {
    background-color: unset;
    color: var(--black);
    padding-right: 0;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-weight: 500;
  letter-spacing: .05rem;
`;

export const Title = styled.h2`
  margin: .3rem 0 2rem;
  border-bottom: .1rem solid var(--white);
  font-weight: 400;
  letter-spacing: .05rem;

  @media print {
    border-bottom: 1px solid var(--black);
  }
`;

export const Introduction = styled.div`
  line-height: 1.3;
`;
