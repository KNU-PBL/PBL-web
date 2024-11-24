import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 뷰포트 높이에 맞춤 */
  width: 100%; /* 뷰포트 너비에 맞춤 */
  max-width: 768px; /* 데스크톱에서는 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  overflow-y: scroll;

  /* 기본 스타일 */
  font-size: 16px; /* 기본 글꼴 크기 */
  line-height: 1.5; /* 줄 간격 */

  /* 태블릿 크기 조정 */
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 0 15px;
    font-size: 14px; /* 글꼴 크기 축소 */
  }

  /* 휴대폰 크기 조정 */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
    font-size: 12px; /* 글꼴 크기 더 축소 */
    line-height: 1.4; /* 줄 간격 조정 */
  }

  /* 아주 작은 화면 (스마트폰) */
  @media (max-width: 480px) {
    padding: 0 5px;
    font-size: 10px; /* 가장 작은 글꼴 크기 */
    line-height: 1.3; /* 줄 간격 최소화 */
  }
`;

export default Container;
