import { Outlet } from "react-router";

import Header from "./Header.jsx";

/** Layout used for Not Found Page */
const LayoutLight = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutLight;
