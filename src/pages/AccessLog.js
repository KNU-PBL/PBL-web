import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
import Container from "../styles/Container";
import LoadingBar from "../components/common/LoadingBar";
import AccessContent from "../components/access/AccessContent";

const AccessLog = () => {
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
          <Header title={"출입 기록 조회"} goToBack={goToBack} />
          <AccessContent />
        </Container>
      )}
    </>
  );
};

export default AccessLog;
