import { render } from "@testing-library/react";
import App from "./App";

test("App 컴포넌트가 정상적으로 렌더링되는지 확인", () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy(); // 컴포넌트가 렌더링되었는지 확인
});
