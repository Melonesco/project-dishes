import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../../../redux/auth/selectors";
import instance from "../../../../axios";
import RecipeBlock from "../../../../components/RecipeBlock";
import FoodCard from "../../../../components/FoodCard";
import { IDish } from "../../../../utils/types";
import * as GS from "../styles";
import * as S from "./styles";

const CreateFoodRation = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const authData = useSelector(selectAuthData);
  const [currentButton, setCurrentButton] = useState(true);
  const [searchValueRecipe, setSearchValueRecipe] = useState("");
  const [filteredDishes, setFilteredDishes] = useState<IDish[]>([]);
  const [selectedDishes, setSelectedDishes] = useState<IDish[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchValue) {
      alert("Введіть назву раціону");
      return;
    }

    instance
      .post("/ration", { title: searchValue, dishes: selectedDishes })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        } else {
          console.log(res);
        }
      });
  };

  useEffect(() => {
    if (currentButton) {
      setFilteredDishes(authData?.borrowedDishes);
    } else {
      setFilteredDishes(authData?.ownDishes);
    }
  }, [authData, currentButton]);

  const handleSearch = () => {
    const filterDishes = (dishes: IDish[]) =>
      dishes.filter((dish: IDish) =>
        dish.title.toLowerCase().includes(searchValueRecipe.toLowerCase())
      );

    const filteredDishes = currentButton
      ? filterDishes(authData?.borrowedDishes)
      : filterDishes(authData?.ownDishes);

    setFilteredDishes(filteredDishes);
    setSearchValueRecipe("");
  };

  const handleClick = (value: IDish) => {
    const dishId = value._id;

    setFilteredDishes(
      filteredDishes.filter((dish: IDish) => dish._id !== dishId)
    );
    setSelectedDishes((prev: IDish[]) => [...prev, value]);
  };

  return (
    <>
      <GS.Title>Створіть підбірку страв</GS.Title>
      <S.Form onSubmit={handleSubmit}>
        <GS.Label>
          Назва раціону
          <S.Input
            maxLength={100}
            type="search"
            name="nameFoodRation"
            value={searchValue}
            onChange={handleInputChange}
          />
        </GS.Label>
        <GS.Label>Кількість страв (до 12)</GS.Label>
        <S.ButtonSubmit type="submit">Підтвердити</S.ButtonSubmit>
      </S.Form>
      <GS.Title>Обрані</GS.Title>
      {selectedDishes.length > 0 ? (
        selectedDishes.map((dish: IDish) => (
          <FoodCard
            key={dish._id}
            dish={dish}
            handleClick={null}
            changeButton={null}
          />
        ))
      ) : (
        <S.EmptyText>Пусто =)</S.EmptyText>
      )}
      <GS.Title>Оберіть страви</GS.Title>
      {selectedDishes.length > 12 ? (
        <S.EmptyText>Ви вибрали максимум страв для раціону</S.EmptyText>
      ) : (
        <RecipeBlock
          handleSearch={handleSearch}
          filteredDishes={filteredDishes}
          currentButton={currentButton}
          setCurrentButton={setCurrentButton}
          searchValueRecipe={searchValueRecipe}
          setSearchValueRecipe={setSearchValueRecipe}
          changeButton={false}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default CreateFoodRation;
