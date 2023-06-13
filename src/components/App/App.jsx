import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import Shop from 'pages/Shop';

import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shop" element={<Shop />}>
            <Route path="mcdonald" element={<div>McDonald</div>} />
            <Route path="kfc" element={<div>KFC</div>} />
            <Route path="dominospizza" element={<div>Dominos Pizza</div>} />
            <Route path="starbucks" element={<div>Starbucks</div>} />
            <Route path="burgerking" element={<div>Burger King</div>} />
          </Route>
          <Route path="shoppingcart" element={<ShoppingCart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
