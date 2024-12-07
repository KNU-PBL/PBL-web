import React from "react";
import styled from "styled-components";

const Header = ({ title, goToBack }) => {
  return (
    <TitleContainer>
      <BackButton onClick={goToBack}>&lt;</BackButton>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #fff;
  padding: 20px 0px;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 60px;
  font-weight: 600;
  margin: 0 auto;
`;

const BackButton = styled.button`
  margin-left: 0;
  font-size: 60px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 50px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export default Header;
