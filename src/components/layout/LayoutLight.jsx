import { Outlet } from "react-router";

import Header from "./Header.jsx";

const LayoutLight = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutLight;
