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
      <CreateUserButton>사용자 신규 등록</CreateUserButton>
      {userData.map((user, index) => (
        <UserCard key={index} name={user.name} imgUrl={user.imgUrl} />
      ))}
    </UserContentContainer>
  );
};

export default UserContent;

const UserContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
`;

const CreateUserButton = styled.button`
  font-family: Pretendard;
  padding: 30px;
  margin: auto;
  width: 80%;
  font-size: 35px;
  font-weight: 500;
  border-radius: 50px;
  border: 1px solid #fff;
  background-color: #565656;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  }
`;
