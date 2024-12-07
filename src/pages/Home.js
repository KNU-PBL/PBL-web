import React, { useEffect, useState } from "react";
import Container from "../styles/Container";
import HomeTitle from "../components/home/HomeTitle";
import HomeContent from "../components/home/HomeContent";
import LoadingBar from "../components/common/LoadingBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

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
          <HomeTitle />
          <HomeContent />
        </Container>
      )}
    </>
  );
};

export default Home;
