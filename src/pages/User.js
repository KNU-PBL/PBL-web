import React, { useState, useEffect } from "react";
import UserContent from "../components/user/UserContent";
import LoadingAnimation from "../components/common/LoadingAnimation";

const User = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <LoadingAnimation /> : <UserContent />}</>;
};

export default User;
