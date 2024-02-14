import styled from "styled-components";
import { CenterLayoutDiv } from "../layout.style";

export const CommentContainer = styled(CenterLayoutDiv)`
    padding-top: 0;
    text-align: left;
`

export const CommentTextarea = styled.textarea`
    width: 100%;
    resize: none;
    padding: 1rem;
    outline: none;
    border: 1px solid orange;
    background-color: white;
    color: black;
    line-height: 1.75;
    /* 패딩과 테두리를 포함한 크기를 지정함 */
    box-sizing: border-box;
`
export const CommentSubmitButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    outline: none;
    border: none;
    background-color: orange;
    color: white;
    font-size: 1rem;
    padding: 10px;
    margin-top: 1rem;

    &:hover, &:focus {
        background-color: orangered;
    }
`