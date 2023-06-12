import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxAppBar = styled.div`
  display: flex;
  padding: ${p => p.theme.space[4] + 4}px;
  background: ${p => p.theme.colors.MediumAquaMarine};
  gap: ${p => p.theme.space[7]}px;
`;

export const StyledNavLink = styled(NavLink)`
  /* Общие стили для NavLink  */
  text-decoration: none;

  font-family: 'Inter';
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.yellow};

  &.active {
    /* Стили для активного NavLink */
    font-weight: bold;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.lime};
  }
`;
