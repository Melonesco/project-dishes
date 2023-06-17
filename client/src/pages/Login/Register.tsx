import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import FoodImg from "../../assets/images/pasta-and-cooking-ingredients 1.png";
import UploadIcon from "../../assets/images/photo_2023-04-19_18-08-19 1.svg";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import instance from "../../axios";
import * as S from "./styles";
import { fetchRegister } from "../../redux/auth/asyncAction";

interface RegisterFormData {
  login: string;
  password: string;
  nickname: string;
  avatarUrl?: string;
}

const Register: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const isAuth = useSelector(selectIsAuth);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (event.target.files && event.target.files.length > 0) {
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append("image", file);
        const { data } = await instance.post("/upload/user/images", formData);
        console.log(data);
        setImageUrl(data.url);
      }
    } catch (err) {
      console.warn(err);
      alert("Error in the download file");
    }
  };

  const onSubmit = async (values: RegisterFormData) => {
    const fields: RegisterFormData = {
      ...values,
      avatarUrl: imageUrl,
    };

    const data = await dispatch(fetchRegister(fields));

    if (!data.payload) {
      return alert(" ");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    reset();
  };

  if (window.localStorage.getItem("token") && isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <S.Container>
      <S.MainImg src={FoodImg} alt="" />
      <S.Title>Реєстрація</S.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Логін
          <S.Input
            type="text"
            {...register("login", {
              required: "Це поле є обов'язковим",
              minLength: {
                value: 4,
                message: "Логін повинен мати мінімум 4 символів",
              },
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
              minLength: {
                value: 6,
                message: "Пароль повинен мати мінімум 6 символів",
              },
            })}
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.Label>
        <S.Label>
          Нікнейм або ім'я
          <S.Input
            type="text"
            {...register("nickname", {
              required: "Це поле є обов'язковим",
              minLength: {
                value: 3,
                message: "Нікнейм повинен мати мінімум 3 символів",
              },
            })}
          />
          <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
        </S.Label>
        <S.LabelUpload>
          {imageUrl ? null : (
            <S.UploadBlock>
              <h2>Додати фото</h2>
              <p>(не обов’язкове поле)</p>
            </S.UploadBlock>
          )}
          <S.ImagePreview
            src={imageUrl ? `http://localhost:5000${imageUrl}` : UploadIcon}
            alt="Preview"
            isIcon={!imageUrl}
          />
          <input
            style={{ display: "none" }}
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </S.LabelUpload>
        <S.ButtonSubmit type="submit">Зареєструватись</S.ButtonSubmit>
        <S.ButtonRegister to="/login">
          Я вже маю обліковий запис
        </S.ButtonRegister>
      </S.Form>
    </S.Container>
  );
};

export default Register;
