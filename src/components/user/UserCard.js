import React from "react";
import styled from "styled-components";

const UserCard = ({ name, imgUrl }) => {
  return (
    <CardContainer>
      {name}
      <ImageWrapper>
        <ProfileImg src={imgUrl} alt={`${name}프로필 이미지`} />
      </ImageWrapper>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
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
