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
      <UnknownTitle>미등록자 인식 기록</UnknownTitle>
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
  gap: 10px;
  padding: 20px;
  min-height: 100%;
  background-color: var(--background-color);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const UnknownTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 0 10px;
  width: 100%;
  color: var(--darkgray-color);
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
