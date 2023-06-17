import React, { useEffect, useState } from "react";
import SearchBlock from "../../../../components/SearchBlock";
import { useSelector } from "react-redux";
import { selectIsDish } from "../../../../redux/dish/selectors";
import FilteredDishes from "../../../../components/FilteredDishes";
import instance from "../../../../axios";
import { IDish } from "../../../../utils/types";
import * as GS from "../styles";
import * as S from "./styles";

const ManagementRecipe = () => {
  const dishes = useSelector(selectIsDish);
  const [filteredDishes, setFilteredDishes] = useState<IDish[] | []>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => setFilteredDishes(dishes), [dishes]);

  const handleSearch = () => {
    if (searchValue) {
      const filtered = dishes.filter((dish: IDish) =>
        dish.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDishes(filtered);
    } else {
      setFilteredDishes(dishes);
    }
    setSearchValue("");
  };

  const handleRemove = (value: IDish) => {
    const dishId = value._id;

    instance.delete(`/dish/${dishId}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        console.log(res);
      }
    });
  };

  return (
    <div>
      <GS.Title>Користувачі та адміністратори</GS.Title>
      <SearchBlock
        handleClick={handleSearch}
        searchValueRecipe={searchValue}
        setSearchValueRecipe={setSearchValue}
      />
      <S.Content>
        <FilteredDishes
          filteredDishes={filteredDishes}
          handleClick={handleRemove}
          changeButton={true}
        />
      </S.Content>
    </div>
  );
};

export default ManagementRecipe;
