import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import getAccessLog from "../../api/getAccessLog";
import HomeBtnCard from "./HomeBtnCard";
import getUnknownLog from "../../api/getUnknownLog";

const HomeContent = () => {
  const navigate = useNavigate();

  const [AccessData, setAccessData] = useState([]);
  const [UnknownData, setUnknownData] = useState([]);

  const fetchAccessLog = async () => {
    try {
      const response = await getAccessLog();
      setAccessData(response);
    } catch (error) {
      console.error("출입 기록 데이터를 가져오는 중 오류 발생 : ", error);
    }
  };

  const fetchUnknownLog = async () => {
    try {
      const response = await getUnknownLog();
      setUnknownData(response);
    } catch (error) {
      console.error(
        "미등록 인식 기록 데이터를 가져오는 중 오류 발생 : ",
        error
      );
    }
  };

  useEffect(() => {
    fetchAccessLog();
    fetchUnknownLog();
  }, []);

  return (
    <HomeContentContainer>
      <HomeButton
        onClick={() => {
          navigate("/access");
        }}
      >
        <HomeBtnTitle>출입 기록 관리</HomeBtnTitle>
        {AccessData.slice(0, 4).map((el, index) => (
          <HomeBtnCard key={index} data={el} />
        ))}
        <HomeBtnText>전체 보기 &gt;</HomeBtnText>
      </HomeButton>
      <HomeButton
        onClick={() => {
          navigate("/unknown");
        }}
      >
        <HomeBtnTitle>미등록자 인식 기록</HomeBtnTitle>
        {UnknownData.slice(0, 4).map((el, index) => (
          <HomeBtnCard key={index} data={el} />
        ))}
        <HomeBtnText>전체 보기 &gt;</HomeBtnText>
      </HomeButton>
      <HomeButton
        onClick={() => {
          navigate("/user");
        }}
        style={{ height: "10%", flexDirection: "row" }}
      >
        <HomeBtnTitle>사용자 목록</HomeBtnTitle>
        <HomeBtnText>전체 보기 &gt;</HomeBtnText>
      </HomeButton>
    </HomeContentContainer>
  );
};

export default HomeContent;

const HomeContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  gap: 20px;
`;

const HomeButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40%;
  padding: 20px;
  background: #fff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    width: 92%;
    height: 42%;
  }
`;

const HomeBtnTitle = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  color: var(--darkgray-color);
`;

const HomeBtnText = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  text-align: end;
`;
