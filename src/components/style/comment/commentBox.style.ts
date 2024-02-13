import styled from "styled-components";

export const CommentBoxWrapper = styled.div`
    width: 100%;
    /* 위 수평 아래*/
    padding: 0px 10px 20px;
`

export const CommentEtcWrapper = styled.div`
    width: 100%;
    /* 내부 요소 가로 정렬 */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 20px;
`

export const CommentEtcDiv = styled.div`
    color: black;
    font-weight: lighter;
    font-size: 0.8rem;
    margin-right: 20px;
`

export const CommentContentSpan = styled.span`
    color: black;
    font-weight: bold;
    font-size: 1rem;
`