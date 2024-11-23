import React from "react";
import styled from "styled-components";
import UnknownCard from "./UnknownCard";

const UnknownContent = () => {
  const data = [
    "2024-10-03 오전 11:23",
    "2024-11-03 오전 11:23",
    "2024-12-03 오전 11:23",
  ];

  return (
    <UnknownContentContainer>
      {data.map((data, index) => (
        <UnknownCard key={index} date={data} />
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
