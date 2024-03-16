import { Link } from "react-router-dom";
import styled from "styled-components";
import { CenterLayoutDiv } from "../layout.style";

export const PostDetailContainer = styled(CenterLayoutDiv)`
    /* text 가로 기준 왼쪽 정렬 */
    text-align: left;
    line-height: 24px;
`

export const PostDetailWrapper = styled.div`
    /* 세로 가로 */
    padding: 24px 0;
    border-top: 1px solid #f2f2f2;
`

export const PostTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    /* 세로 가로 */
    margin: 14px 0px;
    color: ${({ theme }) => theme.text};
`

export const PostProfileWrapper = styled.div`
    /* 세로 가로 */
    padding: 10px 0;
`
export const PostProfile = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #f2f2f2;
`
export const PostAuthorName = styled.div`
    color: gray;
`
export const PostDate = styled.div`
    color: gray;
`

export const PostUtilsWrapper = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    font-size: 14px;
    color: gray;
`
export const PostCategory = styled.div`
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.bordercolor};;
    border-radius: 10px;
    padding: 0px 4px;
    /* 부모 너비 갖지 않도록 설정 */
    width: fit-content;
    background: ${({ theme }) => theme.buttonarea};
    color: ${({ theme }) => theme.text};
`

export const PostDelete = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.text};

    &:hover, &:focus {
        color: orange;
    }
`

export const PostEdit = styled.div`
    color: black;
`
export const PostEditLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    &:hover, &:focus {
        color: orange;
    }
`

export const PostTextWrapper = styled.div`
    font-size: 16px;
    padding: 20px 0;
    white-space: pre-wrap;
`

export const MarkDownWrapper = styled.div`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`