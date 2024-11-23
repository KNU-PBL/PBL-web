import React from "react";
import styled from "styled-components";

const AccessCard = ({ date, name }) => {
  return (
    <CardContainer>
      <Name>{name}</Name>
      <Date>{date}</Date>
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
  width: 40%;
`;
