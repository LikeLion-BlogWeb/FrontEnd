import styled from "styled-components";

const CommonLightFontDiv = styled.div`
    color: black;
    font-weight: lighter;
    font-size: 0.8rem;
`

export const CommentBoxWrapper = styled.div`
    width: 100%;
    padding: 10px 0 10px;
`

export const CommentEtcWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const CommentEtcDiv = styled(CommonLightFontDiv)`
`

export const ModifyDivContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CommentContentSpan = styled.span`
    color: black;
    font-weight: bold;
    font-size: 1rem;
`

export const ModifyDivWrapper = styled.div`
    /* 자식 태그들 flex layout */
    display: flex;
`

export const ModifyDeleteDiv = styled(CommonLightFontDiv)`
    cursor: pointer;

    &:hover {
        color: orange;
        font-weight: normal;
    }
`