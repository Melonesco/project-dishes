import React, { useEffect, useRef, useState } from "react";
import AvatarIcon from "../../assets/images/noavatar.png";
import * as S from "./styles";
import { logout } from "../../redux/auth/slice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import instance from "../../axios";
import { IUser } from "../../utils/types";
import { useNavigate } from "react-router-dom";

interface IModalUser {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userInfo: IUser | null;
}

const data = {
  login: "",
  password: "",
  nickname: "",
};

const ModalUser = ({ setIsModalOpen, userInfo }: IModalUser) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const [valueButton, setValueButton] = useState<boolean>(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(data);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsModalOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeValueButton = (event: React.FormEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setValueButton(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.login.length <= 3) {
      alert("Поле логін повинно мати мінімум 4 символи");
    } else if (formData.password.length <= 5) {
      alert("Поле пароль повинно мати мінімум 6 символів");
    } else if (formData.nickname.length <= 3) {
      alert("Поле нікнейм повинно мати мінімум 4 символи");
    } else {
      instance.patch("user", formData).then((res) => {
        if (res.status === 200) {
          alert("Користувач змінив дані");
          setFormData(data);
          closeModal();
          setValueButton(true);
          window.location.reload();
        } else {
          alert(`Помилка ${res.status}`);
        }
      });
    }
  };

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to log")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      closeModal();
      navigate("/login");
    }
  };

  return (
    <S.Modal ref={modalRef}>
      <S.ModalContent>
        <S.ModalUserName>
          <S.ModalName>{userInfo?.nickname}</S.ModalName>
          <S.ModalStatus>
            {userInfo?.adminStatus ? "Адміністратор" : "Користувач"}
          </S.ModalStatus>
        </S.ModalUserName>
        <S.ModalImg
          src={
            userInfo?.avatarUrl
              ? `http://localhost:5000${userInfo.avatarUrl}`
              : AvatarIcon
          }
          alt="img"
        />
      </S.ModalContent>
      <S.Fields onSubmit={handleSubmit}>
        <S.Label>
          Логін
          <S.ModalInput
            type="text"
            name="login"
            placeholder="Змінити логін"
            disabled={valueButton}
            value={valueButton ? userInfo?.login : formData.login}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Label>
          Пароль
          <S.ModalInput
            type="text"
            name="password"
            placeholder="Змінити пароль"
            disabled={valueButton}
            value={valueButton ? "НЕВІДОМИЙ" : formData.password}
            onChange={handleInputChange}
          />
        </S.Label>
        <S.Label>
          Нікнейм
          <S.ModalInput
            type="text"
            name="nickname"
            placeholder="Змінити нікнейм"
            disabled={valueButton}
            value={valueButton ? userInfo?.nickname : formData.nickname}
            onChange={handleInputChange}
          />
        </S.Label>
        {valueButton ? (
          <S.ModalButton onClick={handleChangeValueButton}>
            редагувати дані
          </S.ModalButton>
        ) : (
          <S.ModalButtonSubmit type="submit">підтвердити</S.ModalButtonSubmit>
        )}
      </S.Fields>
      <S.ModalButton onClick={onClickLogout}>
        Вийти з облікового запису
      </S.ModalButton>
    </S.Modal>
  );
};

export default ModalUser;
