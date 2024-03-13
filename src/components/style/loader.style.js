import styled from "styled-components";

export const StyledLoader = styled.div`
    width: 48px;
    height: 48px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 5px solid orange;
    border-radius: 50%;
    z-index: 999;
    animation: rotation 1s linear infinite;
`