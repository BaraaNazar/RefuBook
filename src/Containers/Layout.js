import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Layout;
