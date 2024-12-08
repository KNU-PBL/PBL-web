import React, { useEffect, useState } from "react";
import HomeContent from "../components/home/HomeContent";
import LoadingAnimation from "../components/common/LoadingAnimation";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : <HomeContent />}</>;
};

export default Home;
