import React from "react";
import styled from "styled-components";

const AccessCard = ({ date, name }) => {
  return (
    <CardContainer>
      <CardContent>
        {name} | {date}
      </CardContent>
    </CardContainer>
  );
};

export default AccessCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #383838;
  width: 80%;
  padding: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const CardContent = styled.div``;
