import React from "react";
import styled from "styled-components";

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <HomeButton>미등록 출입 알림</HomeButton>
      <HomeButton>출입 기록 관리</HomeButton>
      <HomeButton>사용자 목록</HomeButton>
    </HomeContentContainer>
  );
};

export default HomeContent;

const HomeContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const HomeButton = styled.button`
  padding: 30px;
  width: 80%;
  font-size: 35px;
  font-family: inherit;
  border-radius: 50px;
  border: 1px solid #fff;
  background-color: #565656;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }
`;
