import Layout from 'components/Layout/Layout';

const { Routes, Route } = require('react-router-dom');


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="/abaut" element={<Abaut />} />
        <Route path="/products" element={<Products />} /> */}
      </Routes>
    </div>
  );
};

export default App;
