import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import CulinaryHideaway from "./pages/CulinaryHideaway";
import FullPost from "./pages/FullPost";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import { fetchDishes } from "./redux/dish/asyncAction";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDish } from "./redux/dish/selectors";
import { fetchUsers } from "./redux/user/asyncActions";
import { IDish } from "./utils/types";

const App = () => {
  const [numberDisplay, setNumberDisplay] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [changeStatus, setChangeStatus] = useState<boolean>(true);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const dishes = useSelector(selectIsDish);

  const [filteredDishes, setFilteredDishes] = useState<IDish[]>(dishes);

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => setFilteredDishes(dishes), [dishes]);

  const handleSearch = () => {
    if (searchValue) {
      const filtered = dishes.filter((dish: IDish) =>
        dish.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredDishes(filtered);
      setChangeStatus(false);
    } else {
      setFilteredDishes(dishes);
      setChangeStatus(true);
    }
    setSearchValue("");
  };

  return (
    <>
      <Header
        setNumberDisplay={setNumberDisplay}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main changeStatus={changeStatus} filteredDishes={filteredDishes} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create-personal-recipe"
          element={<CulinaryHideaway numberDisplay={numberDisplay} />}
        />
        <Route path="/dishes/:id" element={<FullPost />} />
      </Routes>
    </>
  );
};

export default App;
