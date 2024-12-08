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
`;

const TitleText = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
  cursor: pointer;
`;

export default Header;
