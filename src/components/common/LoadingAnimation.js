import React from "react";
import styled, { keyframes } from "styled-components";
import dgm_logo from "../../assets/images/dgm_logo.png";

const LoadingAnimation = () => {
  return (
    <ImageContainer>
      <LoadingWrapper>
        <LoadingImage src={dgm_logo} alt="DGM Logo" />
        <LoadingCircle />
      </LoadingWrapper>
    </ImageContainer>
  );
};

export default LoadingAnimation;

// Keyframes 애니메이션 정의 (회전 애니메이션)
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 전체 컨테이너
const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  padding-bottom: 300px;
`;

// 이미지와 로딩 선을 감싸는 래퍼
const LoadingWrapper = styled.div`
  position: relative;
  width: 250px; /* 이미지 크기와 동일하게 설정 */
  height: 250px;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
`;

// 고정된 이미지
const LoadingImage = styled.img`
  width: 150px; /* 이미지 크기 조정 */
  height: auto;
  position: absolute;
  z-index: 1; /* 로딩 선 위에 표시 */
`;

// 이미지 주변 회전하는 로딩 선
const LoadingCircle = styled.div`
  width: 100%;
  height: 100%;
  border: 8px solid transparent; /* 투명 테두리 */
  border-top: 8px solid var(--main-color); /* 로딩 선 색상 */
  border-radius: 50%; /* 원형으로 만들기 */
  position: absolute;
  animation: ${rotate} 1.5s linear infinite; /* 회전 애니메이션 */
`;
