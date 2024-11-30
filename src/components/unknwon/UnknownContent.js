import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UnknownCard from "./UnknownCard";
import getUnknownLog from "../../api/getUnknownLog";

const UnknownContent = () => {
  const [UnknownData, setUnknownData] = useState([]);

  useEffect(() => {
    const fetchUnknownLog = async () => {
      try {
        const response = await getUnknownLog();
        setUnknownData(response);
      } catch (error) {
        console.error("사용자 데이터를 가져오는 중 오류 발생 : ", error);
      }
    };

    fetchUnknownLog();
  }, []);

  return (
    <UnknownContentContainer>
      {UnknownData.map((data, index) => (
        <UnknownCard key={index} date={data.detectionTime} />
      ))}
    </UnknownContentContainer>
  );
};

export default UnknownContent;

const UnknownContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin-top: 20px;
`;
