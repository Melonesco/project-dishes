import React from "react";
import SilverSearchIcon from "../../assets/images/silver-search.svg";
import * as S from "./styles";

interface ISearchBlock {
  searchValueRecipe: string;
  handleClick: any;
  setSearchValueRecipe: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBlock = ({
  searchValueRecipe,
  handleClick,
  setSearchValueRecipe,
}: ISearchBlock) => {
  return (
    <S.SearchContainer>
      <S.ImgSearch onClick={handleClick} src={SilverSearchIcon} alt="icon" />
      <S.InputSearch
        value={searchValueRecipe}
        type="search"
        placeholder="Пошук"
        onChange={(e: any) => setSearchValueRecipe(e.target.value)}
      />
    </S.SearchContainer>
  );
};

export default SearchBlock;
