// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = styled.footer`
    position: relative;
    bottom: 0;
    width: 100%;
    min-height: 40px;
    padding: 20px 40px 0 40px;
    font-size: 14px;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 20px;
    border-top: 1px solid orange;
    /* 배경색을 지정해줘야 다른 컨텐츠들이 가려짐 */
    background-color: ${({ theme }) => theme.background};
    /* 카드들의 z축 값을 더 우선시 */
    z-index: -1;
`;

export const FooterCopyRightDiv = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.text};
`