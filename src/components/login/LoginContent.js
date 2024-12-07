import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { AiOutlineLock as LockIcon } from "react-icons/ai";

const LoginContent = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <LoginContainer>
      <LoginForm>
        <LoginInputContainer>
          <StyledUserIcon size={50} $isFocused={focusedInput === "username"} />
          <LoginInput
            type="text"
            placeholder="username"
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput(null)}
          />
        </LoginInputContainer>
        <LoginInputContainer>
          <StyledLockIcon size={50} $isFocused={focusedInput === "password"} />
          <LoginInput
            type="password"
            placeholder="password"
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />
        </LoginInputContainer>
        <LoginBtn type="submit">LOGIN</LoginBtn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginContent;

const StyledUserIcon = styled(UserIcon)`
  color: ${({ $isFocused }) =>
    $isFocused ? "var(--main-color)" : "var(--gray-color)"};
  transition: color 0.3s ease;
`;

const StyledLockIcon = styled(LockIcon)`
  color: ${({ $isFocused }) =>
    $isFocused ? "var(--main-color)" : "var(--gray-color)"};
  transition: color 0.3s ease;
`;

const LoginContainer = styled.div`
  margin: auto;
  margin-top: 0;
  width: 80%;
  height: 30%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LoginInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const LoginInput = styled.input`
  height: 70px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--gray-color);
  font-size: 30px;
  padding: 10px;
  margin-left: 10px;
  transition: 0.5s;
  color: var(--gray-color);
  &:focus {
    border-bottom-color: var(--main-color);
  }
  &::placeholder {
    color: #f0f0f0;
  }
`;

const LoginBtn = styled.button`
  height: 70px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  border: none;
  background-color: var(--main-color);
  color: #fff;
  font-size: 30px;
  font-family: Pretendard;
  font-weight: 600;
`;
