import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostNavProps } from "../../types/home.type";

export const PostNavContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 0 auto;
    max-width: 860px;
    font-size: 16px;
    color: black;
    cursor: pointer;
    /* 상 - 좌/하 - 우 */
    padding: 48px 20px 14px 0;
    border-bottom: 1px solid orange;
`

export const PostNav = styled.div<PostNavProps>`
    color: ${props => props.$active === 'active' ? 'orange' : 'black'};
    font-weight: ${props =>  props.$active === 'active' ? '600' : '400'};
    display: flex;
    gap: 12px;
    margin: 0 auto;
    max-width: 860px;
    font-size: 16px;
    cursor: pointer;
    padding: 48px 20px 0px 20px;
`;

export const PostListContainer = styled.div`
    min-height: 90vh;
    max-width: 860px;
    padding: 20px;
    margin: 0 auto;
    text-align: left;
    line-height: 20px;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 36px;
`;

export const PostContainer = styled.div`
    &:hover{
            transform: scale(1.15);
            transition: transform 0.3s ease;
        }
    background-color: #ffffff;
    height: 300px; 
    width: 260px;
    border-radius: 16px;
    padding: 24px 0;
    transform: perspective(2000px);
    transform-style: preserve-3d;
    box-shadow: 2px 2px 5px #ceced1;
`

export const PostProfileWrapperLink = styled(Link)`
    text-decoration: none;
`

export const PostProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    padding: 0 0 12px 14px;
`
export const PostProfile = styled.div`
    width: 26px;
    height: 26px;
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
export const PostImageContainer = styled.div`
    width: 260px;
    height: 160px;
    overflow: hidden;
    margin: 0 auto;
`
export const PostImage = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #f2f2f2;
`

export const PostBody = styled.div`
    max-width: 100%;
    height: 80px;
    margin: 16px 16px 0 16px;

`
export const PostTitle = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin-top: 12px;
    padding-bottom: 0.14em;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;

    &:hover {
        color: orange;
    }
    &:active {
        color: orangered;
    }
`
export const PostText = styled.div`
    font-size: 16px;
    margin-top: 12px;
    color: dimgray;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    word-break: keep-all;   // 문단으로 끊어져서 줄바꿈 됨
`

export const PostUtilContainer  = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
    font-size: 14px;
    color: black;
    margin: 0 16px;
`
export const PostUtilDelete = styled.div`
    cursor: pointer;
    color: black;

    &:hover, &:focus {
        color: orange;
    }
`

export const PostUtilLink = styled(Link)`
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover, &:focus {
        color: orange;
    }
`