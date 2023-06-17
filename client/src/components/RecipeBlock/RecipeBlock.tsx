import React from "react";
import SearchBlock from "../SearchBlock";
import RadioInputBlock from "../RadioInputBlock";
import FilteredDishes from "../FilteredDishes";
import * as GS from "../../pages/CulinaryHideaway/styles";
import { IDish } from "../../utils/types";

interface IRecipeBlock {
  handleSearch: () => void;
  searchValueRecipe: string;
  setSearchValueRecipe: React.Dispatch<React.SetStateAction<string>>;
  currentButton: boolean;
  setCurrentButton: React.Dispatch<React.SetStateAction<boolean>>;
  filteredDishes: IDish[];
  handleClick: any;
  changeButton: boolean;
}

const RecipeBlock = ({
  handleSearch,
  searchValueRecipe,
  setSearchValueRecipe,
  currentButton,
  setCurrentButton,
  filteredDishes,
  handleClick,
  changeButton,
}: IRecipeBlock) => {
  return (
    <>
      <GS.Container>
        <SearchBlock
          handleClick={handleSearch}
          searchValueRecipe={searchValueRecipe}
          setSearchValueRecipe={setSearchValueRecipe}
        />
        <RadioInputBlock
          currentButton={currentButton}
          setCurrentButton={setCurrentButton}
          firstValue={"Запозичені"}
          secondValue={"Власні"}
        />
      </GS.Container>
      <FilteredDishes
        changeButton={changeButton}
        filteredDishes={filteredDishes}
        handleClick={handleClick}
      />
    </>
  );
};

export default RecipeBlock;
