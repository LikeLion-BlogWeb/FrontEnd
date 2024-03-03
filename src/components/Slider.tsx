import { Fragment, useState } from "react";
import * as Styled from "./style/slider.style";
// images는 배열입니다
import { images } from "constant/constant";

export default function Slider() {
    const [activeImg, setActiveImg] = useState<number>(0);

    return (
        <>
            <Styled.SlidesContainer>
                {/* ul태그 내에서 각 li태그 안에는 이미지컨테이너와 화살표 두개를 지닌 컨테이너 두 개가 있습니다. */}
                <Styled.SlidersWrapperUl>
                    {
                        images.map((imgSrc, index) => {

                            return (
                                <Fragment key={index}>
                                    <Styled.SliderInput id={`img-${index}`} checked={activeImg === index} />
                                    <Styled.SliderLi className="one-slide-container" >
                                        {/* 호버시에 상태를 하나 바꿔서 자식 컴포넌트들이 이를 토대로 opacity를 변경할 수 있도록 */}
                                        <Styled.OneSlideImgContainer className="slide-img-container">
                                            <Styled.SlideImg alt={`img${index}`} src={imgSrc} id={`img-${index}`} />
                                        </Styled.OneSlideImgContainer>
                                        <Styled.SlideControllContainer className="slide-controls">
                                            <Styled.ControlLabel onClick={() => setActiveImg(index-1 < 0 ? images.length-1 : index-1)} direction="left">
                                                {/* left 화살표 */}
                                                <span>&lsaquo;</span>
                                            </Styled.ControlLabel>
                                            <Styled.ControlLabel onClick={()=>setActiveImg(index+1 > images.length-1 ? 0 : index+1)} direction="right">
                                                {/* right 화살표 */}
                                                <span>&rsaquo;</span>
                                            </Styled.ControlLabel>
                                        </Styled.SlideControllContainer>
                                    </Styled.SliderLi>
                                </Fragment>
                            )
                        })
                    }
                    <Styled.SlidesDots className="slide_dots">
                        {
                            images.map((_, index) => {

                                return (
                                    <Styled.SlidesDot id={`img-dot-${index}`} onClick={() => setActiveImg(index)} key={index}></Styled.SlidesDot>
                                )
                            })
                        }
                    </Styled.SlidesDots>
                </Styled.SlidersWrapperUl>
            </Styled.SlidesContainer>
        </>
    )
}