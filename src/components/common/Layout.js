import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Background>
      <main style={{ flex: 1 }}>{children}</main>
    </Background>
  );
};

export default Layout;

const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
