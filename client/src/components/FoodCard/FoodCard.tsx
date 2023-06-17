import React from "react";
import DeleteIcon from "../../assets/images/deleteIcon.svg";
import PlusIcon from "../../assets/images/plus.svg";
import SaucepanIcon from "../../assets/images/saucepan.svg";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { IDish } from "../../utils/types";

interface IFoodCard {
  dish: IDish;
  handleClick: any;
  changeButton: boolean | null;
}

const FoodCard = ({ dish, handleClick, changeButton }: IFoodCard) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => navigate(`/dishes/${dish._id}`);

  return (
    <S.RecipeBlock>
      <S.RecipeContent onClick={handleClickNavigate}>
        <S.RecipeImg src={`http://localhost:5000${dish.imageUrl}`} alt="icon" />
        <S.RecipeInfo>
          <S.RecipeTitle>{dish.title}</S.RecipeTitle>
          <S.RecipeContainer>
            <S.RecipeText>{dish.time}</S.RecipeText>
            <S.RecipeIcon src={SaucepanIcon} alt="img" />
          </S.RecipeContainer>
          <S.RecipeText>{dish.calorie}</S.RecipeText>
          <S.RecipeText>Вага: {dish.weight}</S.RecipeText>
        </S.RecipeInfo>
      </S.RecipeContent>
      {changeButton === null ? null : (
        <S.RecipeButton
          src={changeButton ? DeleteIcon : PlusIcon}
          onClick={() => handleClick(dish)}
          alt="icon"
        />
      )}
    </S.RecipeBlock>
  );
};

export default FoodCard;
