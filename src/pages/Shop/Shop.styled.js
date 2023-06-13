import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 20px;
`;

export const BoxShop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  width: 100%;

  margin-top: 20px;
  margin-left: 20px;
  padding: ${p => p.theme.space[4] + 4}px;

  background: ${p => p.theme.colors.silver};

  p {
    text-align: center;
  }
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

export const StyledOutlet = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 20px;
  margin-right: 20px;
  padding: 20px;

  background: ${p => p.theme.colors.silver};
`;
