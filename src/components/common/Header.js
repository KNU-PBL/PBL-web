import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <TitleContainer>
      <TitleText>PBL10</TitleText>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
`;

export default Header;
