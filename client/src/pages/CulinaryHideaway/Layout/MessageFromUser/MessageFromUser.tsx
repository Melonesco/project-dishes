import React, { useEffect, useState } from "react";
import instance from "../../../../axios";
import DeleteIcon from "../../../../assets/images/deleteIcon.svg";
import AvatarIcon from "../../../../assets/images/avatar.svg";
import * as GS from "../styles";
import * as S from "./styles";
import { IMessage } from "../../../../utils/types";

const MessageFromUser = () => {
  const [messages, setMessages] = useState<IMessage[] | []>([]);

  console.log(messages);

  useEffect(() => {
    instance.get("/messages").then((res) => setMessages(res.data));
  }, []);

  const handleDelete = (id: string) => {
    instance.delete(`/message/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <div>
      <GS.Title>Повідомлення від користувачів</GS.Title>
      {messages.length > 0 ? (
        messages.map((obj: IMessage) => (
          <S.Container key={obj._id}>
            <S.Content>
              <S.UserBlock>
                <S.UserImg
                  src={
                    `http://localhost:5000${obj.user.avatarUrl}` && AvatarIcon
                  }
                  alt=""
                />
                <S.UserName>{obj.user.nickname}</S.UserName>
              </S.UserBlock>
              <S.Message>{obj.message}</S.Message>
            </S.Content>
            <S.ImgDelete
              src={DeleteIcon}
              onClick={() => handleDelete(obj._id)}
              alt="icon"
            />
          </S.Container>
        ))
      ) : (
        <GS.EmptyText>Пусто =(</GS.EmptyText>
      )}
    </div>
  );
};

export default MessageFromUser;
