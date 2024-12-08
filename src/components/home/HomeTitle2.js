import React from "react";
import styled from "styled-components";

const HomeTitle2 = () => {
  return (
    <TitleContainer>
      <TitleText>PBL10</TitleText>
    </TitleContainer>
  );
};

export default HomeTitle2;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 20px 0px;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
`;
