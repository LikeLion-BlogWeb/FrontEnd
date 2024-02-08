import styled from "styled-components";

export const ProfileContainer = styled.div`
    /* flex layout */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-size: 18px;
    text-align: left;
    line-height: 24px;
    /* 여백 설정 */
    gap: 18px;
    padding: 20px;
    /* 최대 크기 지정 */
    max-width: 680px;
`

export const ProfileFlexWrapper = styled.div`
    display: flex;
    gap: 18px;
    align-items: center;
`

export const ProfileImage = styled.div`
    width: 72px;
    height: 72px;
    background-color: #f2f2f2;
    border-radius: 50%;
`

export const ProfileName = styled.div`
    font-size: 16px;
    padding-top: 4px;
`

export const ProfileEmail = styled.div`
    font-weight: 500;
`

export const ProfileLogoutDiv = styled.div`
    color: black;
    font-size: 15px;
    cursor: pointer;
    text-decoration: underline;

    &:hover, &:focus {
        color: orange;
    }
`