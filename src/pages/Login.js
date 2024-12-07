import React, { useEffect, useState } from "react";
import Container from "../styles/Container";
import LoadingAnimation from "../components/common/LoadingAnimation";
import LoginContent from "../components/login/LoginContent";
import LoginTitle from "../components/login/LoginTitle";

const Login = () => {
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
    }, 3000); // 5초 후 로딩 완료

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <LoadingAnimation show={show} />
        </Container>
      ) : (
        <Container>
          <LoginTitle />
          <LoginContent />
        </Container>
      )}
    </>
  );
};

export default Login;
