import { Outlet } from "react-router";

import Header from "./Header.jsx";
import Footer from "./Footer";

const layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
