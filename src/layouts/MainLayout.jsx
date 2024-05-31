import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer/Footer";
import Nav from "../components/common/Header/Nav";

const MainLayout = () => {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
