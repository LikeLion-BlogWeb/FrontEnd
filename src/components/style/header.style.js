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

export const HeaderLink = styled(Link)`
    text-decoration: none;
    margin: 0 10px;
    color: black;

    &:focus, &:hover {
        color: orange;
    }
`;