import { useEffect, useState } from 'react';
import { getMenu } from 'utils/fakeAPI';

const McDonald = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <>
      <div>{menu.map(item => console.log(item))}</div>
    </>
  );
};

export default McDonald;
