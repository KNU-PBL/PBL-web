import React from "react";
import styled from "styled-components";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiOutlineUserSwitch as AccessIcon } from "react-icons/ai";
import { AiOutlineCamera as UnknownIcon } from "react-icons/ai";
import { AiOutlineUsergroupAdd as UserIcon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <FooterBtn
        onClick={() => {
          navigate("/home");
        }}
      >
        <StyledHomeIcon />
        <BtnText>홈</BtnText>
      </FooterBtn>
      <FooterBtn
        onClick={() => {
          navigate("/access");
        }}
      >
        <StyledAccessIcon />
        <BtnText>출입</BtnText>
      </FooterBtn>
      <FooterBtn
        onClick={() => {
          navigate("/unknown");
        }}
      >
        <StyledUnknownIcon />
        <BtnText>미등록</BtnText>
      </FooterBtn>
      <FooterBtn
        onClick={() => {
          navigate("/user");
        }}
      >
        <StyledUserIcon />
        <BtnText>사용자</BtnText>
      </FooterBtn>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--darkgray-color);
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--gray-color);
    color: white;

    svg {
      color: white;
    }
  }
`;

const StyledHomeIcon = styled(HomeIcon)`
  font-size: 32px;
  color: var(--gray-color);
  transition: color 0.3s ease;
`;

const StyledAccessIcon = styled(AccessIcon)`
  font-size: 32px;
  color: var(--gray-color);
  transition: color 0.3s ease;
`;

const StyledUnknownIcon = styled(UnknownIcon)`
  font-size: 32px;
  color: var(--gray-color);
  transition: color 0.3s ease;
`;

const StyledUserIcon = styled(UserIcon)`
  font-size: 32px;
  color: var(--gray-color);
  transition: color 0.3s ease;
`;

const BtnText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
