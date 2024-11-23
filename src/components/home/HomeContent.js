import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <HomeContentContainer>
      <HomeButton
        onClick={() => {
          navigate("/unknown");
        }}
      >
        미등록자 인식 기록
      </HomeButton>
      <HomeButton
        onClick={() => {
          navigate("/access");
        }}
      >
        출입 기록 관리
      </HomeButton>
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
  font-weight: 500;
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
