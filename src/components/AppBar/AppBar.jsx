
import { navItems } from '../../utils/NavItems';
import { BoxAppBar, StyledNavLink } from './AppBar.styled';

const AppBar = () => {
  return (
    <BoxAppBar>
      {navItems.map(item => (
        <StyledNavLink to={item.href} key={item.href}>
          {item.text}
        </StyledNavLink>
      ))}
    </BoxAppBar>
  );
};
export default AppBar;
