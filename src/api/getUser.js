import axiosClient from "./axiosClient";

const getUser = async () => {
  try {
    const response = await axiosClient.get("/api/users");
    return response.data;
  } catch (error) {
    console.error("전체 에러 객체:", error);

    if (error.response) {
      // 서버에서 오류 응답을 반환한 경우
      console.error("응답 상태 코드:", error.response.status);
      console.error("응답 데이터:", error.response.data);
      throw new Error(
        `서버 오류: ${error.response.status} - ${
          error.response.data.message || error.response.data
        }`
      );
    } else if (error.request) {
      // 요청이 전송되었으나 응답이 없는 경우
      console.error("요청 객체:", error.request);
      throw new Error("네트워크 문제 또는 서버가 응답하지 않습니다.");
    } else {
      // 요청 설정 중 오류 발생
      console.error("요청 설정 오류:", error.message);
      throw new Error("요청 설정 오류가 발생했습니다.");
    }
  }
};

export default getUser;
