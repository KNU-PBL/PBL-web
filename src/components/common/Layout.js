import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "../../styles/Container";

function Layout() {
  return (
    <Container>
      <FixedHeader>
        <Header />
      </FixedHeader>
      <Content>
        <Outlet /> {/* 중첩된 콘텐츠가 렌더링될 부분 */}
      </Content>
      <FixedFooter>
        <Footer />
      </FixedFooter>
    </Container>
  );
}

export default Layout;

const FixedHeader = styled.div`
  width: 100%;
  z-index: 1000;
`;

const Content = styled.div`
  flex: 1;
  margin-bottom: 150px; /* Footer의 높이 */
  overflow-y: auto; /* 세로 스크롤 가능 */
  box-sizing: border-box;
  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const FixedFooter = styled.div`
  width: 100%;
  z-index: 1000;
`;
