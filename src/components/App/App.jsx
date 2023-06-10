import { Routes, Route } from 'react-router-dom';

import Layout from 'pages/Layout';
import Shop from 'pages/Shop';
import ShoppingCart from 'pages/ShoppingCart';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Layout />
            </div>
          }
        ></Route>
        <Route path="/shop" element={<Shop />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
    </Container>
  );
};

export default App;
