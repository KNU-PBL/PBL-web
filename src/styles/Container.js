import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 뷰포트 높이에 맞춤 */
  width: 100%; /* 뷰포트 너비에 맞춤 */
  max-width: 768px; /* 데스크톱에서는 최대 너비 제한 */
  margin: 0 auto; /* 화면 가운데 정렬 */
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  overflow-y: scroll;

  /* 태블릿 크기 조정 */
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 15px;
  }

  /* 휴대폰 크기 조정 */
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 10px; /* 좌우 여백 축소 */
  }

  /* 아주 작은 화면 (스마트폰) */
  @media (max-width: 480px) {
    padding: 0 5px; /* 더 작은 여백 */
  }
`;

export default Container;
