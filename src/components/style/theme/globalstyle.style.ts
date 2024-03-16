import { createGlobalStyle } from "styled-components";

// 모드 변경에 따른 배경 및 글자 색상 전역적 관리
export const GlobalStyle = createGlobalStyle`
    *{
        transition: all 0.5s ease-in-out;
    }
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
    button { 
        color: ${({ theme }) => theme.buttontext};
        
    }
`;