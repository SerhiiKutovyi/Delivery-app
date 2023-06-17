import { Outlet } from 'react-router-dom';
import { BoxShop, StyledNavLink, Box, StyledOutlet } from './Shop.styled';
import { brands } from 'utils/NavBrands';

const Shop = () => {
  return (
    <>
      <Box>
        <BoxShop>
          <h1>shops:</h1>
          {brands.map(({ herf, text, icon: Icon }) => (
            <StyledNavLink key={herf} to={herf}>
              <Icon size={16} />
              {text}
            </StyledNavLink>
          ))}
        </BoxShop>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </Box>
    </>
  );
};
export default Shop;
