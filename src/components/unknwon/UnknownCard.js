import React from "react";
import styled from "styled-components";

const UnknownCard = ({ date }) => {
  // T를 공백으로 대체
  const formattedDate = date.replace("T", " ");

  return (
    <CardContainer>
      <Name>정문 출입구</Name>
      <Date>{formattedDate}</Date>
    </CardContainer>
  );
};

export default UnknownCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  font-size: 25px;
  font-weight: 600;
  color: var(--gray-color);
  background-color: #fff;
  border-radius: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;

const Name = styled.div``;

const Date = styled.div`
  width: 55%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
