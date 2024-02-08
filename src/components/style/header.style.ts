import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid orange;
    padding: 10px 40px;
    min-height: 40px;
`;

export const HeaderLogoLink = styled(Link)`
    color: black;
    font-weight: 700;
    font-size: 32px;
    text-decoration: none;
`;

interface HeaderLinkProps {
    displayattr: string;
}
export const HeaderLink = styled(Link)<HeaderLinkProps>`
    text-decoration: none;
    margin: 0 10px;
    color: black;
    display: ${props => props.displayattr==="true" ? "inline-block" : "none"};

    &:focus, &:hover {
        color: orange;
    }
`;
export const HeaderLoginLink = styled(Link)<HeaderLinkProps>`
    text-decoration: none;
    margin: 0 10px;
    color: black;
    border-radius: 10%;

    display: ${props => props.displayattr==="true" ? "none" : "inline-block"};

    &:focus, &:hover {
        background-color: orange;
        color: white;
    }
`;