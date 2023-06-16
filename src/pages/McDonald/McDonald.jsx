import { useEffect, useState } from 'react';
import { getMenu } from 'utils/fakeAPI';

import { BoxMcDonald,ImgMcDonald } from './McDonald.styled';

const McDonald = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <>
      {menu.map(item => (
        <BoxMcDonald key={item.id}>
          <h2>{item.dish}</h2>
          <p>Total: {item.total}</p>
          <ImgMcDonald src={item.imgUrl} alt={item.alt} />
        </BoxMcDonald>
      ))}
    </>
  );
};

export default McDonald;
