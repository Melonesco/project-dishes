import React from "react";
import DreamMealImg from "../../assets/images/layout.svg";
import SimpleIcon from "../../assets/images/1000.svg";
import DishBlock from "../../components/DishBlock";
import { CategoriesDishes } from "../../utils/Storage";
import { IDish, ISlideType } from "../../utils/types";
import * as S from "./styles";

interface IMain {
  changeStatus: boolean;
  filteredDishes: IDish[];
}

const Main = ({ changeStatus, filteredDishes }: IMain) => {
  return (
    <>
      {changeStatus ? (
        <S.Container>
          <S.SliderContainer>
            {/*<Slider slides={SLIDES} text={true} />*/}
            <div></div>
            <S.BlockDreamMeal>
              <S.DreamMealImg src={DreamMealImg} alt="img" />
              <S.DreamMealTitle>ЗНАЙДИ СВІЙ РЕЦЕПТ МРІЇ</S.DreamMealTitle>
            </S.BlockDreamMeal>
          </S.SliderContainer>
        </S.Container>
      ) : null}
      <S.Dishes
        changeHeight={changeStatus ? "-200px" : "40px"}
        marginBottom={changeStatus ? "100px" : "40px"}
      >
        {CategoriesDishes.map((dish: ISlideType, i: number) => (
          <S.Links to="/" key={i}>
            <S.DishesImg src={dish.imageUrl} alt="img" />
            <S.DishesTitle>{dish.description}</S.DishesTitle>
          </S.Links>
        ))}
      </S.Dishes>
      <S.Title>ОБЕРИ РЕЦЕПТ</S.Title>
      <S.TitleBlock>
        <S.TitleLine>
          <img src={SimpleIcon} alt="icon" />
          <S.Line></S.Line>
        </S.TitleLine>
      </S.TitleBlock>
      <DishBlock filteredDishes={filteredDishes} />
    </>
  );
};

export default Main;
