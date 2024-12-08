import React from "react";
import styled from "styled-components";

const Background = ({ children }) => {
  return (
    <BackgroundColor>
      <main style={{ flex: 1 }}>{children}</main>
    </BackgroundColor>
  );
};

export default Background;

const BackgroundColor = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
