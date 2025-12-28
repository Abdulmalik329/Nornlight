import React from "react";
import { LayoutWrapper, LayoutWrapper_main } from "./Layout.styled";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import NavbarMain from "./Navbar/components/NavbarMain";

function MainLayout(props) {
  const { pathname } = useLocation();
  const decodedPath = decodeURIComponent(pathname);
  const noWrapperRoutes = ["/Доставка"];
  const isNoWrapper = noWrapperRoutes.includes(decodedPath);

  return (
    <LayoutWrapper>
      <div>
        <NavbarMain />
        {isNoWrapper ? (
          <Outlet />
        ) : (
          <LayoutWrapper_main>
            <Outlet />
          </LayoutWrapper_main>
        )}
      </div>
      <Footer />
    </LayoutWrapper>
  );
}

export default MainLayout;
