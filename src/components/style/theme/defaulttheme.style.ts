import "styled-components";

// Theme의 속성 설정
// 배경색, 텍스트 색, 게시물 카드 배경색, 버튼 텍스트 색, 게시물 카드 그림자 색 지정
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: string;
    buttonarea: string;
    buttontext: string;
    postcardshadow: string;
    bordercolor: string;
    inputarea: string;
  }
}