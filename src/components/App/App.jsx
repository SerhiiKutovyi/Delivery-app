import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<div><Layout /></div>} ></Route>
        {/* <Route path="/abaut" element={<Abaut />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
