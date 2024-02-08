import styled from "styled-components"

export const PostFormContainer = styled.form`
    /* 세로 가로 - 중앙설정 */
    margin: 0 auto;
    max-width: 1100px;
    padding: 20px;
    margin-top: 20px;
`

export const PostFormInputWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
`

export const PostFormLabel = styled.label`
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
`

export const PostFormInput = styled.input`
    height: 20px;
    padding: 10px;
    font-size: 16px;
    border-radius: 0.3rem;
    border: 1px solid lightgray;
`

export const PostFormTextarea = styled.textarea`
    min-height: 400px;
    padding: 10px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 0.3rem;
    border: 1px solid orange;
    width: 100%;
    box-sizing: border-box;
`

export const PostFormSelect = styled.select`
    border: 1px solid lightgray;
    max-width: 680px;
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
    border-radius: 0.3rem;
` 

export const PostFormSubmitButton = styled.input`
    width: 100%;
    height: 48px;
    font-weight: 600;
    font-size: 16px;
    color: white;
    background-color: orange;
    padding: 10px;
    /* 오른쪽 배치 */
    position: relative;
    right: 0;
    /* 세로 가로 */
    margin: 0 auto;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    &:hover, &:focus {
        background-color: orangered;
    }
`