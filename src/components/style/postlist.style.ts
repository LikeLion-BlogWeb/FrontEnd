import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostNavProps } from "../../types/home.type";

export const PostNavContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 auto;
    max-width: 680px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    /* 상 - 좌/우 - 하 */
    padding: 48px 20px 0;
`

export const PostNav = styled.div<PostNavProps>`
    color: ${props => props.$active === 'active' ? 'orange' : 'black'};
    font-weight: ${props =>  props.$active === 'active' ? '600' : '400'};
    display: flex;
    gap: 12px;
    margin: 0 auto;
    max-width: 680px;
    font-size: 16px;
    cursor: pointer;
    padding: 48px 20px 0px 20px;
`;

export const PostListContainer = styled.div`
    min-height: 90vh;
    max-width: 680px;
    padding: 20px;
    margin: 0 auto;
    text-align: left;
    line-height: 20px;
`;

export const PostContainer = styled.div`
    padding: 24px 0;
    border-top: 1px solid orange;
`
export const PostProfileWrapperLink = styled(Link)`
    text-decoration: none;
`

export const PostProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
`
export const PostProfile = styled.div`
    width: 36px;
    height: 36px;
    background: #f2f2f2;
    border-radius: 50%;
`
export const PostEtc = styled.div`
    color: black;
    &:hover {
        color: orange;
    }
    &:active {
        color: orangered;
    }
`

export const PostTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: 14px 0;
    color: black;

    &:hover {
        color: orange;
    }
    &:active {
        color: orangered;
    }
`
export const PostText = styled.div`
    font-size: 16px;
    color: black;
`

export const PostUtilContainer  = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
    font-size: 14px;
    color: black;
`
export const PostUtilDelete = styled.div`
    cursor: pointer;
    color: black;

    &:hover, &:focus {
        color: orange;
    }
`
export const PostUtilEdit = styled.div`
    color: black;
    cursor: pointer;

    &:hover, &:focus {
        color: orange;
    }
`

export const PostUtilLink = styled(Link)`
    text-decoration: none;
`