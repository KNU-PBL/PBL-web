import React from "react";
import styled from "styled-components";
import AccessCard from "./AccessCard";

const AccessContent = () => {
  const data = [
    { date: "2024-12-24 11:23", name: "구준혁" },
    { date: "2024-12-05 17:21", name: "김상현" },
    { date: "2024-11-23 12:43", name: "박소빈" },
    { date: "2024-11-14 14:23", name: "홍길동" },
    { date: "2024-10-15 05:22", name: "김철수" },
    { date: "2024-10-12 23:11", name: "김영희" },
  ];

  return (
    <AccessContentContainer>
      {data.map((data, index) => (
        <AccessCard key={index} date={data.date} name={data.name} />
      ))}
    </AccessContentContainer>
  );
};

export default AccessContent;

const AccessContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  margin-top: 20px;
`;
