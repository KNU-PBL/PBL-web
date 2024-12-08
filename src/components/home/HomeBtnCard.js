import React from "react";
import styled from "styled-components";

const HomeBtnCard = ({ data }) => {
  const formattedDate = data.entryTime
    ? data.entryTime.replace("T", " ")
    : data.detectionTime.replace("T", " ");

  const name = data.userName ? data.userName : "정문 출입구";

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Date>{formattedDate}</Date>
    </CardContainer>
  );
};

export default HomeBtnCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  padding: 3px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--gray-color);
`;

const Name = styled.div``;

const Date = styled.div`
  width: 35%;
  text-align: start;
`;
