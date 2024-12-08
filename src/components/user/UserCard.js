import React from "react";
import styled from "styled-components";

const UserCard = ({ name, imgUrl }) => {
  return (
    <CardContainer>
      {name}
      <ImageWrapper>
        <ProfileImg
          src={`http://52.78.196.254:8080${imgUrl}`}
          alt={`${name} 프로필 이미지`}
        />
      </ImageWrapper>
    </CardContainer>
  );
};

export default UserCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--gray-color);
  background-color: #fff;
  border-radius: 20px;
  width: 49%;
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
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
`;
