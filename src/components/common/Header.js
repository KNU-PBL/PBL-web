import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <TitleContainer>
      <TitleText
        onClick={() => {
          navigate("/home");
        }}
      >
        PBL10
      </TitleText>
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
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const TitleText = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 30px;
    font-weight: 700px;
  }
  cursor: pointer;
`;

export default Header;
