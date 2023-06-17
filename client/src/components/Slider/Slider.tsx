import React, { useEffect, useState } from "react";
import * as S from "./styles";

interface ISlider {
  slides: any;
  text?: boolean;
  size?: boolean;
}

const Slider = ({ slides, text, size }: ISlider) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === slides?.imagesUrl.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides?.imagesUrl.length]);

  const handleClickDot = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <S.SliderContainer
      width={size ? "100%" : "656px"}
      height={size ? "580px" : "369px"}
    >
      {slides
        ? slides.imagesUrl.map((slide: any, index: number) => (
            <S.Slide key={slide.id} active={index === activeIndex}>
              <S.SlideImage
                src={
                  slide.imageUrl && `http://localhost:5000${slide?.imageUrl}`
                }
                alt={`Slide ${slide.id}`}
              />
              {text ? <S.SlideText>{slide.description}</S.SlideText> : null}
            </S.Slide>
          ))
        : null}
      <S.Dots>
        {slides
          ? slides.imagesUrl.map((image: any, index: number) => (
              <S.Dot
                key={image.id}
                size={size ? "16px" : "12px"}
                active={index === activeIndex}
                onClick={() => handleClickDot(index)}
              />
            ))
          : null}
      </S.Dots>
    </S.SliderContainer>
  );
};

export default Slider;
