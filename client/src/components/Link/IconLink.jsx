import styled from 'styled-components';

const Anchor = styled.a`
  color: var(--main-color-light);
  text-decoration: none;

  @media print {
    display: none !important;
  }
`;

const iconMap = {
  link: 'fas fa-link',
  github: 'fab fa-github',
};

export const IconLink = ({ url, icon = 'link' }) => (
  <Anchor className={iconMap[icon]} href={url} />
);
