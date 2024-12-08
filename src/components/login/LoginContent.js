import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { AiOutlineLock as LockIcon } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // 예시: 기본 검증 로직
    if (username === "admin" && password === "1234qwer") {
      navigate("home");
      setError(""); // 에러 초기화
    } else {
      setError("아이디 혹은 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInputContainer>
          <StyledUserIcon $isFocused={focusedInput === "username"} />
          <LoginInput
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput(null)}
          />
        </LoginInputContainer>
        <LoginInputContainer>
          <StyledLockIcon $isFocused={focusedInput === "password"} />
          <LoginInput
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />
        </LoginInputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginBtn type="submit">LOGIN</LoginBtn>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginContent;

// 스타일 컴포넌트들
const StyledUserIcon = styled(UserIcon)`
  color: ${({ $isFocused }) =>
    $isFocused ? "var(--main-color)" : "var(--gray-color)"};
  transition: color 0.3s ease;
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const StyledLockIcon = styled(LockIcon)`
  color: ${({ $isFocused }) =>
    $isFocused ? "var(--main-color)" : "var(--gray-color)"};
  transition: color 0.3s ease;
  font-size: 50px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
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
  justify-content: center;
`;

const LoginInput = styled.input`
  height: 70px;
  width: 80%;
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
  @media (max-width: 768px) {
    height: 50px;
    font-size: 25px;
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
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--main-color);
    background-color: #fff;
    color: var(--main-color);
  }
  @media (max-width: 768px) {
    height: 50px;
    font-size: 20px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
`;
