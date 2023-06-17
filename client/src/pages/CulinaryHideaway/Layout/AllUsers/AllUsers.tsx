import React, { useEffect, useState } from "react";
import * as GS from "../styles";
import RadioInputBlock from "../../../../components/RadioInputBlock";
import { useSelector } from "react-redux";
import { usersSelector } from "../../../../redux/user/selectors";
import AvatarIcon from "../../../../assets/images/avatar.svg";
import instance from "../../../../axios";
import { selectAuthData } from "../../../../redux/auth/selectors";
import { IUser } from "../../../../utils/types";
import * as S from "./styles";

const AllUsers = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const usersData = useSelector(usersSelector);
  const authData = useSelector(selectAuthData);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(usersData.filter((user: IUser) => user.adminStatus === isAdmin));
  }, [isAdmin, usersData]);

  const handleChangeStatus = (value: boolean, id: string) => {
    instance.patch(`/user/${id}`, { isAdmin: value }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  const handleRemove = (id: string) => {
    instance.delete(`/user/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <div>
      <GS.Title>Користувачі та адміністратори</GS.Title>
      <RadioInputBlock
        currentButton={isAdmin}
        setCurrentButton={setIsAdmin}
        firstValue="Адміністратори"
        secondValue="Користувачі"
      />
      {users.length > 0 ? (
        users.map((obj: IUser) => (
          <S.Container key={obj._id}>
            <S.Content>
              <S.UserBlock>
                <S.UserImg
                  src={
                    obj.avatarUrl
                      ? `http://localhost:5000${obj.avatarUrl}`
                      : AvatarIcon
                  }
                  alt=""
                />
                <S.UserInfo>
                  <S.UserName>{obj.nickname}</S.UserName>
                  <S.UserText>
                    {obj.adminStatus ? "Адміністратор" : "Користувач"}
                  </S.UserText>
                  <S.UserText>Логін: {obj.login}</S.UserText>
                </S.UserInfo>
              </S.UserBlock>
            </S.Content>
            <S.ButtonBlock>
              {authData?.adminStatus && obj._id !== authData?._id ? (
                <S.Button
                  onClick={() => handleChangeStatus(!obj.adminStatus, obj._id)}
                  background={!obj.adminStatus ? "#840505" : "#ffffff"}
                  text={!obj.adminStatus ? "#ffffff" : "#840505"}
                >
                  {!obj.adminStatus
                    ? "Зробити адміністратором"
                    : "Відмінити адміністратора"}
                </S.Button>
              ) : null}
              {authData?.adminStatus && obj._id !== authData?._id ? (
                <S.Button onClick={() => handleRemove(obj._id)}>
                  Видалити користувача
                </S.Button>
              ) : null}
            </S.ButtonBlock>
          </S.Container>
        ))
      ) : (
        <GS.EmptyText>Пусто =(</GS.EmptyText>
      )}
    </div>
  );
};

export default AllUsers;
