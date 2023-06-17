import React, { useEffect, useState } from "react";
import * as GS from "../styles";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../../../redux/auth/selectors";
import instance from "../../../../axios";
import RecipeBlock from "../../../../components/RecipeBlock";
import { IDish } from "../../../../utils/types";

const AddRecipe = () => {
  const authData = useSelector(selectAuthData);
  const [currentButton, setCurrentButton] = useState(true);
  const [searchValueRecipe, setSearchValueRecipe] = useState("");
  const [filteredDishes, setFilteredDishes] = useState<IDish[]>([]);

  useEffect(() => {
    if (currentButton) {
      setFilteredDishes(authData?.borrowedDishes);
    } else {
      setFilteredDishes(authData?.ownDishes);
    }
  }, [authData, currentButton]);

  const handleSearch = () => {
    const filteredDishes = authData?.[
      currentButton ? "borrowedDishes" : "ownDishes"
    ].filter((dish: IDish) =>
      dish.title.toLowerCase().includes(searchValueRecipe.toLowerCase())
    );
    setFilteredDishes(filteredDishes);
    setSearchValueRecipe("");
  };

  const handleRemove = (value: IDish) => {
    const dishId = value._id;

    instance.delete("dishes/borrowed", { data: { dishId } }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      } else {
        console.log(res);
      }
    });
  };

  return (
    <>
      <GS.Title>Додай свою власну страву</GS.Title>
      <RecipeBlock
        handleSearch={handleSearch}
        filteredDishes={filteredDishes}
        currentButton={currentButton}
        setCurrentButton={setCurrentButton}
        searchValueRecipe={searchValueRecipe}
        setSearchValueRecipe={setSearchValueRecipe}
        changeButton={true}
        handleClick={handleRemove}
      />
    </>
  );
};

export default AddRecipe;
