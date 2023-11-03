import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyleFooter = styled.footer`
    min-height: 40px;
    padding: 20px 40px;
    font-size: 14px;
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 20px;
    border-top: 1px solid orange;
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover {
        color: orange;
    }
`;