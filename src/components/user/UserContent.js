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
