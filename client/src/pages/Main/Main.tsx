import React, { useState } from "react";
import DreamMealImg from "../../assets/images/layout.svg";
import SimpleIcon from "../../assets/images/1000.svg";
import DishBlock from "../../components/DishBlock";
import { CategoriesDishes } from "../../utils/Storage";
import { IDish, ISlideType } from "../../utils/types";
import * as S from "./styles";
import MainSlider from "../../components/MainSlider";

interface IMain {
  changeStatus: boolean;
  filteredDishes: IDish[];
}

const Main = ({ changeStatus, filteredDishes }: IMain) => {
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleShowMore = () => {
    setDisplayCount(displayCount + 6);
  };

  const filteredDishesWithStatus = filteredDishes.filter(
    (dish: IDish) => dish.status
  );

  const filteredDishesByCategory = filteredDishesWithStatus.filter(
    (dish: IDish) => dish.type === selectedCategory
  );

  const handleCategoryClick = (categoryType: string) => {
    setSelectedCategory(categoryType);
    setDisplayCount(6);
  };

  const showMoreButtonVisible =
    (selectedCategory
      ? filteredDishesByCategory.length
      : filteredDishesWithStatus.length) > displayCount;

  const displayedDishes = selectedCategory
    ? filteredDishesByCategory.slice(0, displayCount)
    : filteredDishesWithStatus.slice(0, displayCount);

  return (
    <>
      {changeStatus ? (
        <S.Container>
          <S.SliderContainer>
            <MainSlider slides={filteredDishesWithStatus} text={true} />
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
        {CategoriesDishes.map((category: ISlideType, i: number) => (
          <S.Links
            to="/"
            key={i}
            onClick={() => handleCategoryClick(category.type)}
          >
            <S.DishesImg src={category.imageUrl} alt="img" />
            <S.DishesTitle>{category.description}</S.DishesTitle>
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
      <DishBlock filteredDishes={displayedDishes} />
      {showMoreButtonVisible && (
        <S.ButtonBlock>
          <S.ButtonMore onClick={handleShowMore}>Показати ще</S.ButtonMore>
        </S.ButtonBlock>
      )}
    </>
  );
};

export default Main;
