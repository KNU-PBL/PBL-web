import React, { useState, useEffect } from "react";

import UnknownContent from "../components/unknwon/UnknownContent";
import LoadingAnimation from "../components/common/LoadingAnimation";

const Unknown = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : <UnknownContent />}</>;
};

export default Unknown;
