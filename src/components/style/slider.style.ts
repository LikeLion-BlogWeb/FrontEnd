import styled from "styled-components";
import { SliderLabelActiveProps } from "../../types/home.type"

export const SlidesContainer = styled.div`
    margin: 0 auto;
    max-width: 980px;
    margin-top: 38px;
`;
export const SlidersWrapperUl = styled.ul`
    /* 슬라이드들의 기준점 설정 */
    position: relative;
    display: block;
    height: 400px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style: none;
    user-select: none;
`;
export const SliderInput = styled.input.attrs(() => ({
    type: "radio",
    readOnly: true,
}))`
    display: none;
`;

export const SliderLi = styled.li`
    display: block;
`

export const OneSlideImgContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
`;

export const StyledImg = styled.img`
    width: auto;
    min-width: 100%;
    height: 100%;
    border-radius: 30px;
`

export const SlideControllContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    font-size: 100px;
    line-height: 400px;
    color: #fff;
`
export const ControlLabel = styled.label<SliderLabelActiveProps>`
    /* 우선 안 보이도록 하다가 호버시에 보여지도록 */
    display: none;
    position: absolute;
    padding: 0 20px;
    opacity: 0;
    transition: opacity 0.2s;
    cursor: pointer;
    /* 전체 이미지 사이즈의 절반 정도씩 차지하도록 설정 */
    width: 49%;

    /* default는 왼쪽, 아니면 오른쪽 */
    text-align: ${(props) => props.direction === 'left' ? props.direction : props.direction};
    left: ${(props) => props.direction === 'left' ? '0' : null};
    right: ${(props) => props.direction === 'right' ? '0' : null};

    &:hover {
        opacity: 1;
    }
`;

export const SlidesDots = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20px;
    z-index: 10;
    text-align: center;
`
export const SlidesDot = styled.label`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    margin: 10px;
`