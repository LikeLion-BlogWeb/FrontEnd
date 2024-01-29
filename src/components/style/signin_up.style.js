import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
    margin-top: 10vh;
    min-height: 70vh;
    margin: 0 auto;
    max-width: 680px;
    padding: 20px;
    margin-top: 20px;
    /* width는 내부 컴포넌트들의 사이즈로 결정 */
`
export const LoginAndRegisterTitle = styled.h1`
    text-align: center;
    margin-bottom: 4px;
`

export const FormInnerWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
`

export const StyledLabel = styled.label`
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
`

export const LoginInput = styled.input`
    height: 20px;
    padding: 10px;
    font-size: 18px;
    border-radius: 0.3rem;
    border: 1px solid orange;
    width: 96%;
    max-width: 680px;
`

export const ErrorMsgContainer = styled.div`
    color: red;
    font-weight: 600;
`

export const StyledLink = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 600;

    &:hover, &:focus {
        color: orange;
    }
`

export const LoginSubmitButton = styled.button`
    width: 100%;
    height: 48px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    margin: 0 auto;
    font-size: 18px;
    color: white;
    background-color: black;
    /* 미세하게 버튼 테두리 남는거 제거하는 속성 2개 */
    border: none;
    outline: none;

    &:focus, &:hover {
        background-color: orange;
    }
    /* 버튼이 클릭되었다가 떼질 때 */
    &:active {
        background-color: orangered;
    }
`