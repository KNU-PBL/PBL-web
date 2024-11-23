import React, { useState, useEffect } from "react";
import Container from "../styles/Container";
import Header from "../components/common/Header";
import { useNavigate } from "react-router-dom";
import LoadingBar from "../components/common/LoadingBar";
import UserContent from "../components/user/UserContent";

const User = () => {
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
          <Header title={"사용자 목록"} goToBack={goToBack} />
          <UserContent />
        </Container>
      )}
    </>
  );
};

export default User;
