import { BoxShop, StyledNavLink } from './Shop.styled';
import { brands } from 'utils/NavBrands';

const Shop = () => {
  return (
    <BoxShop>
      {brands.map(({ herf, text, icon: Icon }) => (
        <StyledNavLink key={herf} to={herf}>
          <Icon size={16} />
          {text}
        </StyledNavLink>
      ))}
    </BoxShop>
  );
};
export default Shop;
