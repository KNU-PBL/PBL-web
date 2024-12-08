import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import getUser from "../../api/getUser";

const UserContent = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUser();
        setUserData(users);
      } catch (error) {
        console.error("사용자 데이터를 가져오는 중 오류 발생 : ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContentContainer>
      <UserTitle>사용자 목록</UserTitle>
      <UserListContinaer>
        {userData.map((user, index) => (
          <UserCard key={index} name={user.name} imgUrl={user.faceImg} />
        ))}
      </UserListContinaer>
    </UserContentContainer>
  );
};

export default UserContent;

const UserContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  min-height: 100%;
  background-color: var(--background-color);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const UserListContinaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  gap: 12px;
  justify-content: space-between;
  background-color: var(--background-color);
`;

const UserTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  padding: 0 10px;
  width: 100%;
  color: var(--darkgray-color);
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
