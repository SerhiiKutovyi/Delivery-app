import { BoxShop, StyledNavLink } from './Shop.styled';
import { brends } from 'utils/NavBrands';

const Shop = () => {
  return (
    <BoxShop>
      {brends.map(({ herf, text, icon: Icon }) => (
        <StyledNavLink key={herf} to={herf}>
          <Icon size={16} />
          {text}
        </StyledNavLink>
      ))}
    </BoxShop>
  );
};
export default Shop;
