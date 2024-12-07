import React from "react";
import styled from "styled-components";
import dgm_logo from "../../assets/images/dgm_logo.png";
import bi_logo from "../../assets/images/bi_logo.png";

const LoginTitle = () => {
  return (
    <LoginTitleContainer>
      <ImageContainer>
        <LoginImage1 src={dgm_logo} alt="DGM Logo" />
        X
        <LoginImage2 src={bi_logo} alt="BI Logo" />
      </ImageContainer>
      <LoginTitleText>Sign In</LoginTitleText>
      <LoginDesc>
        경북대학교 PBL 10팀
        <br />
        얼굴 인식 기반 출입관리 시스템
      </LoginDesc>
    </LoginTitleContainer>
  );
};

const LoginTitleContainer = styled.div`
  margin: 0 auto;
  height: 35%;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const LoginTitleText = styled.div`
  color: var(--darkgray-color);
  font-size: 50px;
`;

const LoginDesc = styled.div`
  color: var(--gray-color);
  font-size: 20px;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: var(--gray-color);
  gap: 10px;
  margin-bottom: 30px;
`;

const LoginImage1 = styled.img`
  width: 100px;
  height: auto;
`;

const LoginImage2 = styled.img`
  width: 75px;
  height: auto;
`;

export default LoginTitle;
