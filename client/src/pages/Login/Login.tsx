import React from "react";
import { useForm } from "react-hook-form";
import FoodImg from "../../assets/images/pasta-and-cooking-ingredients 1.png";
import * as S from "./styles";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { AnyAction, PayloadAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { fetchAuth } from "../../redux/auth/asyncAction";

interface FormData {
  login: string;
  password: string;
}

const Login: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (values: FormData) => {
    const data = (await dispatch(fetchAuth(values))) as PayloadAction<any>;

    if (!data.payload) {
      return alert("Не вийшло зареєструватися");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    window.location.reload();
  };

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <S.Container>
      <S.MainImg src={FoodImg} alt="img" />
      <S.Title>Увійдіть до свого акаунту</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Логін
          <S.Input
            type="text"
            {...register("login", {
              required: "Це поле є обов'язковим",
            })}
          />
          <S.ErrorMessage>{errors.login?.message}</S.ErrorMessage>
        </S.Label>
        <S.Label>
          Пароль
          <S.Input
            type="password"
            {...register("password", {
              required: "Це поле є обов'язковим",
            })}
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.Label>
        <S.ButtonSubmit type="submit">Увійти</S.ButtonSubmit>
        <S.ButtonRegister to="/register">Реєстрація</S.ButtonRegister>
      </S.Form>
    </S.Container>
  );
};

export default Login;
