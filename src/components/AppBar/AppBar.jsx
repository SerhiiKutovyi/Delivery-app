import { Link } from 'react-router-dom';
import { navItems } from '../../utils/NavItems';
import { BoxAppBar } from './AppBar.styled';

const AppBar = () => {
  return (
    <BoxAppBar>
      {navItems.map(item => (
        <Link to={item.href} key={item.href}>
          {item.text}
        </Link>
      ))}
    </BoxAppBar>
  );
};
export default AppBar;
