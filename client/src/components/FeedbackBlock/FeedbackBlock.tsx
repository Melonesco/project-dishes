import React, { useEffect, useState } from "react";
import AvatarIcon from "../../assets/images/avatar.svg";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import instance from "../../axios";

interface IFeedbackBlock {
  id: string | null;
}

const FeedbackBlock = ({ id }: IFeedbackBlock) => {
  const authData = useSelector(selectAuthData);
  const [feedbacks, setFeedbacks] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    instance.get("/feedbacks").then((res) => setFeedbacks(res.data));
  }, []);

  const handleClick = () => {
    instance.post("/feedback", { title: value }).then((res) => {
      if (res.status) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <S.Container>
      {authData?._id !== id ? (
        <>
          <S.Text>Залиште свій відгук</S.Text>
          <S.Field>
            <S.Input
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setValue(e.target.value)
              }
            />
            <S.Button onClick={handleClick}>відправити</S.Button>
          </S.Field>
        </>
      ) : null}
      <S.Title>Відгуки</S.Title>
      {feedbacks.length > 0
        ? feedbacks.map((obj: any) => (
            <S.Block key={obj._id}>
              <S.UserImg
                src={`http://localhost:5000${obj.user.avatarUrl}` || AvatarIcon}
                alt="img"
              />
              <S.UserInfo>
                <S.UserName>{obj.user.nickname}</S.UserName>
                <S.UserMessage>{obj.title}</S.UserMessage>
              </S.UserInfo>
            </S.Block>
          ))
        : null}
    </S.Container>
  );
};

export default FeedbackBlock;
