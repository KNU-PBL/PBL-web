import React, { useEffect, useState } from "react";
import Container from "../styles/Container";
import styled, { keyframes } from "styled-components";
import dgm_logo from "../assets/images/dgm_logo.png";
import bi_logo from "../assets/images/bi_logo.png";
import HomeTitle from "../components/Home/HomeTitle";
import HomeContent from "../components/Home/HomeContent";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태
  const [show, setShow] = useState(false); // 이미지 상태

  useEffect(() => {
    // 이미지 애니메이션 상태 토글
    const interval = setInterval(() => {
      setShow((prev) => !prev);
    }, 2000);

    // 로딩 상태를 5초 후에 해제
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval); // 애니메이션 종료
    }, 2000); // 5초 후 로딩 완료

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <ImageContainer>
            <LoadingImage src={bi_logo} alt="BI Logo" show={show} />
            <LoadingImage src={dgm_logo} alt="DGM Logo" show={show} />
          </ImageContainer>
        </Container>
      ) : (
        <Container>
          <HomeTitle />
          <HomeContent />
        </Container>
      )}
    </>
  );
};

export default Home;

// Keyframes 애니메이션 정의
const fadeInOut = keyframes`
  0%, 100% { opacity: 0.2; } 
  50% { opacity: 1; }
`;

// 이미지를 세로로 정렬하는 컨테이너
const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center; /* 가로 중앙 정렬 */
  gap: 20px; /* 이미지 사이의 간격 */
  margin-bottom: 100px;
`;

const LoadingImage = styled.img`
  width: 200px;
  height: auto;
  opacity: 0;
  animation: ${fadeInOut} 1s infinite; /* 애니메이션 반복 */
`;
