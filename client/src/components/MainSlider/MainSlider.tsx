import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IDish } from "../../utils/types";

interface ISlider {
  slides: IDish[];
  text: boolean;
  size?: boolean;
}

const MainSlider = ({ slides, text, size }: ISlider) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [randomSlides, setRandomSlides] = useState<IDish[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledSlides = [...slides].sort(() => 0.5 - Math.random());
    const subsetSlides = shuffledSlides.slice(0, 6);

    setRandomSlides(subsetSlides);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === subsetSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slides]);

  const handleClickDot = (index: number) => {
    setActiveIndex(index);
  };

  const handleNavigate = (id: string) => {
    navigate(`/dishes/${id}`);
  };

  return (
    <S.SliderContainer
      width={size ? "100%" : "656px"}
      height={size ? "580px" : "369px"}
    >
      {randomSlides.map((slide: IDish, index: number) => (
        <S.Slide
          onClick={() => handleNavigate(slide._id)}
          key={slide._id}
          active={index === activeIndex}
        >
          <S.SlideImage
            src={slide.imageUrl && `http://localhost:5000${slide.imageUrl}`}
            alt={`Slide ${slide._id}`}
          />
          {text ? <S.SlideText>{slide.title}</S.SlideText> : null}
        </S.Slide>
      ))}
      <S.Dots>
        {randomSlides.map((image: any, index: number) => (
          <S.Dot
            key={image._id}
            size={size ? "16px" : "12px"}
            active={index === activeIndex}
            onClick={() => handleClickDot(index)}
          />
        ))}
      </S.Dots>
    </S.SliderContainer>
  );
};

export default MainSlider;
