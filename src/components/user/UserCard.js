import React from "react";
import styled from "styled-components";

const UserCard = ({ name, imgUrl }) => {
  return (
    <CardContainer>
      {name}
      <ImageWrapper>
        <ProfileImg src={imgUrl} alt={`${name} 프로필 이미지`} />
      </ImageWrapper>
      <ModifyButtonContainer>
        <ModifyButton>수 정</ModifyButton>
      </ModifyButtonContainer>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #383838;
  width: 48%;
  padding: 20px;
  font-size: 40px;
  font-weight: 600;
  height: 30%;
  overflow: hidden;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ModifyButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModifyButton = styled.button`
  font-family: Pretendard;
  font-weight: 500;
  background-color: #565656;
  border: 1px solid #fff;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }
`;
