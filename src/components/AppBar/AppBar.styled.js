import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxAppBar = styled.div`
  display: flex;
  padding: ${p => p.theme.space[4] + 4}px;
  background: ${p => p.theme.colors.MediumAquaMarine};
  gap: ${p => p.theme.space[7]}px;
`;

export const StyledNavLink = styled(NavLink)`
  /* Общие стили для NavLink */
  color: ${p => p.theme.colors.yellow};
  text-decoration: none;

  &.active {
    /* Стили для активного NavLink */
    font-weight: bold;
  }
`;
