import { useState } from "react";
import * as Styled from "./style/slider.style";
import likelion1 from "../img/likelion_1.png";
import likelion2 from "../img/likelion_2.jpeg";
import likelion3 from "../img/likelion_3.jpeg";


export default function Slider() {
    const [activeImg, setActiveImg] = useState(1);

    return (
        <>
            <Styled.SlidesContainer>
                {/* ul안에 li태그 3묶음이 존재합니다. 각 li태그 안에는 이미지컨테이너와 화살표 두개를 지닌 컨테이너 두 개가 있습니다. */}
                <Styled.SlidersWrapperUl>
                    <Styled.SliderInput id="img-1" checked={activeImg === 1} />
                    <Styled.SliderLi className="one-slide-container">
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <Styled.OneSlideImgContainer className="slide-img-container">
                            <Styled.SlideImg alt="img1" src={likelion1} id="img-1" />
                        </Styled.OneSlideImgContainer>
                        <Styled.SlideControllContainer className="slide-controls">
                            <Styled.ControlLabel onClick={()=>setActiveImg(3)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </Styled.ControlLabel>
                            <Styled.ControlLabel onClick={()=>setActiveImg(2)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </Styled.ControlLabel>
                        </Styled.SlideControllContainer>
                    </Styled.SliderLi>

                    <Styled.SliderInput id="img-2" checked={activeImg === 2} />
                    <Styled.SliderLi className="one-slide-container">
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <Styled.OneSlideImgContainer className="slide-img-container">
                            <Styled.SlideImg alt="img2" src={likelion2} id="img-2" />
                        </Styled.OneSlideImgContainer>
                        <Styled.SlideControllContainer className="slide-controls">
                            <Styled.ControlLabel onClick={()=>setActiveImg(1)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </Styled.ControlLabel>
                            <Styled.ControlLabel onClick={()=>setActiveImg(3)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </Styled.ControlLabel>
                        </Styled.SlideControllContainer>
                    </Styled.SliderLi>

                    <Styled.SliderInput id="img-3" checked={activeImg === 3} />
                    <Styled.SliderLi className="one-slide-container">
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <Styled.OneSlideImgContainer className="slide-img-container">
                            <Styled.SlideImg alt="img3" src={likelion3} id="img-3" />
                        </Styled.OneSlideImgContainer>
                        <Styled.SlideControllContainer className="slide-controls">
                            <Styled.ControlLabel onClick={()=>setActiveImg(2)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </Styled.ControlLabel>
                            <Styled.ControlLabel onClick={()=>setActiveImg(1)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </Styled.ControlLabel>
                        </Styled.SlideControllContainer>
                    </Styled.SliderLi>
                    <Styled.SlidesDots className="slide_dots">
                        <Styled.SlidesDot onClick={()=>setActiveImg(1)} id="img-dot-1"></Styled.SlidesDot>
                        <Styled.SlidesDot onClick={()=>setActiveImg(2)} id="img-dot-2"></Styled.SlidesDot>
                        <Styled.SlidesDot onClick={()=>setActiveImg(3)} id="img-dot-3"></Styled.SlidesDot>
                    </Styled.SlidesDots>
                </Styled.SlidersWrapperUl>
            </Styled.SlidesContainer>
        </>
    )
}