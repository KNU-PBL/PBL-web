import React, { useEffect, useState } from "react";
import AccessContent from "../components/access/AccessContent";
import LoadingAnimation from "../components/common/LoadingAnimation";

const AccessLog = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : <AccessContent />}</>;
};

export default AccessLog;
