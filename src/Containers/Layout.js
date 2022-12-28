import { Outlet } from 'react-router-dom';
import NavBar from '../Components/home/navbar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
export default Layout;
