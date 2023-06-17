import React, { useEffect, useState } from "react";
import * as S from "../styles";
import instance from "../../../../axios";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../../../redux/auth/selectors";
import RationBlock from "../../../../components/RationBlock";

const MyFoodRecipe = () => {
  const [rations, setRations] = useState([]);
  const authData = useSelector(selectAuthData);
  const [filteredRations, setFilteredRations] = useState([]);

  useEffect(() => {
    instance.get("/rations").then((res) => setRations(res.data));
  }, []);

  useEffect(() => {
    setFilteredRations(
      rations.filter((obj: any) => obj.user._id === authData?._id)
    );
  }, [rations, authData?._id]);

  return (
    <>
      <S.Title>Створені вами раціони</S.Title>
      {filteredRations.length > 0 ? (
        filteredRations.map((obj: any) => (
          <RationBlock key={obj._id} ration={obj} />
        ))
      ) : (
        <div>Пусто</div>
      )}
    </>
  );
};

export default MyFoodRecipe;
