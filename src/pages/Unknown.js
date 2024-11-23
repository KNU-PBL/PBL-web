import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../styles/Container";
import Header from "../components/common/Header";
import UnknownContent from "../components/Unknown/UnknownContent";
import { useNavigate } from "react-router-dom";

const Unknown = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const goToBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>{isLoading && <LoadingBar />}</Container>
      ) : (
        <Container>
          <Header title={"미등록자 인식 기록"} goToBack={goToBack} />
          <UnknownContent />
        </Container>
      )}
    </>
  );
};

const LoadingBar = styled.div`
  width: 70%;
  height: 4px;
  margin: auto;
  background-color: white;
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }
    100% {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

export default Unknown;
