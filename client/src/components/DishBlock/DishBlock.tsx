import React from "react";
import SaucepanIcon from "../../assets/images/saucepan.svg";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IDish } from "../../utils/types";

interface IDishBlock {
  filteredDishes: IDish[];
}

const DishBlock = ({ filteredDishes }: IDishBlock) => {
  const navigate = useNavigate();

  const handleClick = (data: IDish) => {
    navigate(`/dishes/${data._id}`);
  };

  return (
    <S.DishesBlocks>
      {filteredDishes.length > 0
        ? filteredDishes.map((dish: IDish) => (
            <S.DishBlock key={dish._id} onClick={() => handleClick(dish)}>
              <S.DishImg
                src={`http://localhost:5000${dish.imageUrl}`}
                alt="img"
              />
              <S.DishContainer>
                <S.DishTitle>{dish.title}</S.DishTitle>
                <S.DishInfo>
                  <S.DishContent>
                    <S.DishText>1 год 45 хв</S.DishText>
                    <img src={SaucepanIcon} alt="icon" />
                  </S.DishContent>
                  <S.DishText>{dish.calorie}</S.DishText>
                </S.DishInfo>
              </S.DishContainer>
            </S.DishBlock>
          ))
        : null}
    </S.DishesBlocks>
  );
};

export default DishBlock;
