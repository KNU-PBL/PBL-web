import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../styles/Container";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet /> {/* 중첩된 콘텐츠가 렌더링될 부분 */}
      <Footer />
    </Container>
  );
}

export default Layout;
