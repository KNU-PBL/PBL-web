import React from "react";
import styled from "styled-components";
import dgm_logo from "../../assets/images/dgm_logo.png";
import bi_logo from "../../assets/images/bi_logo.png";

const HomeTitle = () => {
  return (
    <TitleContainer>
      <LogoImage src={dgm_logo} alt="DGM Logo" />
      <TitleText>HOME</TitleText>
      <LogoImage src={bi_logo} alt="BI Logo" />
    </TitleContainer>
  );
};

export default HomeTitle;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--main-color);
  padding: 20px 0px;
`;

const LogoImage = styled.img`
  height: 60px;
  width: auto;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 60px;
  font-weight: 600;
`;
