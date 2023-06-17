
import { navItems } from '../../utils/NavItems';
import { BoxAppBar, StyledNavLink } from './AppBar.styled';

const AppBar = () => {
  return (
    <BoxAppBar>
      {navItems.map(({ href, text }) => (
        <StyledNavLink to={href} key={href}>
          {text}
        </StyledNavLink>
      ))}
    </BoxAppBar>
  );
};
export default AppBar;
