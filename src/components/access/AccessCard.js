import React from "react";
import styled from "styled-components";

const AccessCard = ({ date, name }) => {
  // T를 공백으로 대체
  const formattedDate = date.replace("T", " ");

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Date>{formattedDate}</Date>
    </CardContainer>
  );
};

export default AccessCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #383838;
  width: 100%;
  padding: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const Name = styled.div``;

const Date = styled.div`
  width: 50%;
`;
