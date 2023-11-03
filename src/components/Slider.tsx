import { useState } from "react";
import { IMG_SOURCE } from "../util/img"
import { ControlLabel, OneSlideImgContainer, SlideControllContainer, SliderInput, SlidersWrapperUl, SlidesContainer, SlidesDot, SlidesDots } from "./style/slider.style";

export default function Slider() {

    const ImgSrc = IMG_SOURCE;
    const [activeImg, setActiveImg] = useState(1);
    const [hoverNumberImg, setHoverNumberImg] = useState(1);

    return (
        <>
            <SlidesContainer>
                <SlidersWrapperUl>
                    <SliderInput id="1" checked={activeImg === 1} />
                    <li className="one-slide-container" style={{display: "block"}}>
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <OneSlideImgContainer className="slide-img-container" onMouseEnter={()=>setHoverNumberImg(1)}>
                            <img alt="img1" src={ImgSrc.img1} />
                        </OneSlideImgContainer>
                        <SlideControllContainer>
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(3)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </ControlLabel>
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(2)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </ControlLabel>
                        </SlideControllContainer>
                    </li>

                    <SliderInput id="2" checked={activeImg === 2} />
                    <li className="one-slide-container" style={{display: "block"}}>
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <OneSlideImgContainer className="slide-img-container" onMouseEnter={()=>setHoverNumberImg(2)}>
                            <img alt="img2" src={ImgSrc.img2} />
                        </OneSlideImgContainer>
                        <SlideControllContainer>
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(1)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </ControlLabel>
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(3)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </ControlLabel>
                        </SlideControllContainer>
                    </li>

                    <SliderInput id="3" checked={activeImg === 3} />
                    <li className="one-slide-container" style={{display: "block"}}>
                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                        <OneSlideImgContainer className="slide-img-container" onMouseEnter={()=>setHoverNumberImg(3)}>
                            <img alt="img3" src={ImgSrc.img3} />
                        </OneSlideImgContainer>
                        <SlideControllContainer className="slide-controls">
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(2)} direction="left">
                                {/* left 화살표 */}
                                <span>&lsaquo;</span>
                            </ControlLabel>
                            <ControlLabel active={(hoverNumberImg === activeImg).toString()} onClick={()=>setActiveImg(1)} direction="right">
                                {/* right 화살표 */}
                                <span>&rsaquo;</span>
                            </ControlLabel>
                        </SlideControllContainer>
                    </li>
                    <SlidesDots className="slide_dots">
                        <SlidesDot onClick={()=>setActiveImg(1)} id="1"></SlidesDot>
                        <SlidesDot onClick={()=>setActiveImg(2)} id="2"></SlidesDot>
                        <SlidesDot onClick={()=>setActiveImg(3)} id="3"></SlidesDot>
                    </SlidesDots>
                </SlidersWrapperUl>
            </SlidesContainer>
        </>
    )
}