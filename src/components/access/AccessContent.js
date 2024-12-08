import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccessCard from "./AccessCard";
import getAccessLog from "../../api/getAccessLog";

const AccessContent = () => {
  const [AccessData, setAccessData] = useState([]);

  useEffect(() => {
    const fetchAccessLog = async () => {
      try {
        const response = await getAccessLog();
        setAccessData(response);
      } catch (error) {
        console.error("사용자 데이터를 가져오는 중 오류 발생 : ", error);
      }
    };

    fetchAccessLog();
  }, []);
  return (
    <AccessContentContainer>
      <AccessLogTitle>출입 기록</AccessLogTitle>
      {AccessData.map((data, index) => (
        <AccessCard key={index} date={data.entryTime} name={data.userName} />
      ))}
    </AccessContentContainer>
  );
};

export default AccessContent;

const AccessContentContainer = styled.div`
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

const AccessLogTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 0 10px;
  width: 100%;
  color: var(--darkgray-color);
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
