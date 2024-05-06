import { Outlet } from "react-router-dom";
import FooterPage from "../Components/FooterPage";
import NavHeader from "../Components/NavHeader";

function outlet() {
  return (
    <>
      <NavHeader />
      <Outlet />
      <FooterPage />
    </>
  );
}

export default outlet;
