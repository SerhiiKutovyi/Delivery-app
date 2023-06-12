import { Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Shop from 'pages/Shop';
import ShoppingCart from 'pages/ShoppingCart';
import NotFound from 'pages/NotFound/NotFound';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
