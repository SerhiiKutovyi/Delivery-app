// import { BoxLayout } from './Layout.styled';
import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
