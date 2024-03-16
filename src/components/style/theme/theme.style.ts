// ThemeProvider 내부에서 사용 가능한 테마 모드 작성
import { DefaultTheme } from "styled-components";

// 라이트 모드 정의
export const lightTheme: DefaultTheme = {
  background: "#ffffff",
  text: "#202124",
  buttonarea: "#ffffff",
  buttontext: "#131213",
  postcardshadow: "#CECED1",
  bordercolor: "lightgray",
  inputarea: "#ffffff",
};

// 다크 모드 정의
export const darkTheme: DefaultTheme = {
  background: "#131213",
  text: "#ffffff",
  buttonarea: "#2B2B2B",
  buttontext: "#ffffff",
  postcardshadow: "#0E1116",
  bordercolor: "#31363C",
  inputarea: "#0E1116",
};

export const theme = {
    lightTheme,
    darkTheme,
};
