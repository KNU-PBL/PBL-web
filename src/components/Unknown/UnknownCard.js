import React from "react";
import styled from "styled-components";

const UnknownCard = ({ date }) => {
  return (
    <CardContainer>
      <Date>미등록자가 인식되었습니다.</Date>
      <Notice>{date}</Notice>
      <ConfirmButtonContainer>
        <ConfirmButton>확 인</ConfirmButton>
      </ConfirmButtonContainer>
    </CardContainer>
  );
};

export default UnknownCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #383838;
  width: 80%;
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Date = styled.div`
  padding-bottom: 20px;
`;

const Notice = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding: 20px;
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ConfirmButton = styled.button`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 24px;
`;
