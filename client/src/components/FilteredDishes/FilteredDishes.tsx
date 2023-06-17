import React from "react";
import FoodCard from "../FoodCard";
import * as S from "../../pages/CulinaryHideaway/Layout/styles";
import { IDish } from "../../utils/types";

interface IFilteredDishes {
  filteredDishes: IDish[];
  handleClick: any;
  changeButton: boolean | null;
}

const FilteredDishes = ({
  filteredDishes,
  handleClick,
  changeButton,
}: IFilteredDishes) => {
  return (
    <>
      {filteredDishes?.length > 0 ? (
        filteredDishes.map((dish: IDish) => (
          <FoodCard
            key={dish._id}
            dish={dish}
            changeButton={changeButton}
            handleClick={handleClick}
          />
        ))
      ) : (
        <S.EmptyText>Пусто =(</S.EmptyText>
      )}
    </>
  );
};

export default FilteredDishes;
