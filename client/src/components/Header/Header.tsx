import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "../../assets/images/search.svg";
import UserIcon from "../../assets/images/user.svg";
import AvatarIcon from "../../assets/images/noavatar.png";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import ModalUser from "../ModalUser";
import { IUser } from "../../utils/types";
import { fetchAuthMe } from "../../redux/auth/asyncAction";

interface IHeader {
  setNumberDisplay: React.Dispatch<React.SetStateAction<number | null>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  handleSearch: () => void;
}

const Header = ({
  handleSearch,
  setNumberDisplay,
  searchValue,
  setSearchValue,
}: IHeader) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchAuthMe()).then((res) => setUserInfo(res.payload));
  }, [dispatch]);

  const openModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <S.Header>
      <S.Wrapper>
        <S.Block>
          <S.LogoLink to="/">
            <S.Logo src={Logo} alt="logo" />
          </S.LogoLink>
          <S.InputBlock>
            <S.SearchIcon onClick={handleSearch} src={SearchIcon} alt="icon" />
            <S.Input
              type="text"
              maxLength={50}
              placeholder="Пошук"
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
            />
          </S.InputBlock>
        </S.Block>
        <S.Container>
          {isAuth ? (
            <S.Content>
              <S.Nav>
                <S.Links
                  to="/create-personal-recipe"
                  onClick={() => setNumberDisplay(1)}
                >
                  створити рецепт
                </S.Links>
                <S.Links
                  to="/create-personal-recipe"
                  onClick={() => setNumberDisplay(2)}
                >
                  книга рецептів
                </S.Links>
                <S.Links
                  to="/create-personal-recipe"
                  onClick={() => setNumberDisplay(3)}
                >
                  створити раціон на день
                </S.Links>
              </S.Nav>
              <S.UserBlock onClick={openModal}>
                <S.UserName>{userInfo?.nickname}</S.UserName>
                <S.UserImg
                  src={
                    userInfo?.avatarUrl
                      ? `http://localhost:5000${userInfo.avatarUrl}`
                      : AvatarIcon
                  }
                  alt="icon"
                />
              </S.UserBlock>
            </S.Content>
          ) : (
            <S.RegisterBlock to="/login">
              <S.UserIcon src={UserIcon} alt="icon" />
              <S.SignInText>sign in</S.SignInText>
            </S.RegisterBlock>
          )}
        </S.Container>
        {isModalOpen && (
          <ModalUser setIsModalOpen={setIsModalOpen} userInfo={userInfo} />
        )}
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
