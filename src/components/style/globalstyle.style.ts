import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
    button { 
        color: ${({ theme }) => theme.buttontext};
    }
`;