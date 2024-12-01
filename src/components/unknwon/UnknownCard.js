import React from "react";
import styled from "styled-components";

const UnknownCard = ({ date }) => {
  // T를 공백으로 대체
  const formattedDate = date.replace("T", " ");

  return (
    <CardContainer>
      <Date>미등록자가 인식되었습니다.</Date>
      <Notice>{formattedDate}</Notice>
      <ConfirmButtonContainer>
        <ConfirmButton>숨 김</ConfirmButton>
      </ConfirmButtonContainer>
    </CardContainer>
  );
};

export default UnknownCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #383838;
  width: 100%;
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
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ConfirmButton = styled.button`
  font-family: Pretendard;
  background: #bdbdbd;
  font-size: 20px;
  font-weight: 600;
  padding: 12px 24px;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
  }
`;
