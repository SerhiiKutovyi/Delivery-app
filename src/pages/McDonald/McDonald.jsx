import { useEffect, useState } from 'react';
import { getMenu } from 'utils/fakeAPI';

import { BoxMcDonald, ImgMcDonald } from './McDonald.styled';
import Button from 'components/Button/Button';

const McDonald = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  const onButtonAddCart = () => {
    console.log('Click');
  };

  return (
    <>
      {menu.map(({ id, dish, total, imgUrl, alt }) => (
        <BoxMcDonald key={id}>
          <h2>{dish}</h2>
          <ImgMcDonald src={imgUrl} alt={alt} />
          <p>Total: {total}</p>
          <Button onClick={onButtonAddCart} />
        </BoxMcDonald>
      ))}
    </>
  );
};

export default McDonald;
