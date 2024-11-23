import React from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const UserContent = () => {
  const data = [
    {
      name: "구준혁",
      imgUrl:
        "https://as2.ftcdn.net/v2/jpg/00/01/23/77/1000_F_1237715_fm2DfzNy0302VJCwu0OVsUWcDBZoG0.jpg",
    },
    {
      name: "김상현",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWMUMn8eN2Xw-_cqZxM4zJ7d0P0L6ir-pVeQ&s",
    },
    {
      name: "박소빈",
      imgUrl:
        "https://m.luxblock.co.kr/file_data/luxblook/2020/08/17/4b0708ca352f2f903ed0ef0162bac4f2.png",
    },
    {
      name: "홍길동",
      imgUrl:
        "https://m.luxblock.co.kr/file_data/luxblook/2020/08/17/aacc2aa999a7ad8252af2dff4ac950d2.png",
    },
    {
      name: "김철수",
      imgUrl: "https://m.luxblock.co.kr/web/upload/NNEditor/20200817/test2.png",
    },
  ];

  return (
    <UserContentContainer>
      {data.map((data, index) => (
        <UserCard key={index} name={data.name} imgUrl={data.imgUrl} />
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
