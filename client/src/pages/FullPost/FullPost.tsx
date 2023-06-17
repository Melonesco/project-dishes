import React, { useCallback, useEffect, useState } from "react";
import Slider from "../../components/Slider";
import FeedbackBlock from "../../components/FeedbackBlock";
import SaucepanIcon from "../../assets/images/saucepan.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthData } from "../../redux/auth/selectors";
import { IDish } from "../../utils/types";
import instance from "../../axios";
import * as S from "./styles";

const FullPost = () => {
  const [data, setData] = useState<IDish | null>(null);
  const { id } = useParams();
  const authData = useSelector(selectAuthData);
  const [buttonStatus, setButtonStatus] = useState(false);

  useEffect(() => {
    instance
      .get(`/dishes/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.warn(err);
        alert("Помилка при отриманні страви");
      });
  }, [id]);

  const addRecipe = useCallback((data: IDish | null) => {
    console.log(data);

    instance
      .post("dishes/borrowed", { dishId: data?._id })
      .then((res) => {
        console.log(res);
        setButtonStatus(true);

        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.warn(err);
        alert("Помилка при додаванні до книги рецептів");
      });
  }, []);

  const findBorrowedDishes = Boolean(
    authData?.borrowedDishes.find((dish: IDish) => dish._id === data?._id)
  );

  useEffect(() => setButtonStatus(findBorrowedDishes), [findBorrowedDishes]);

  return (
    <S.Container>
      <S.TitleImg
        src={data?.imageUrl && `http://localhost:5000${data?.imageUrl}`}
        alt="img"
      />
      <S.Content>
        <S.ContentBlock>
          <S.Title>{data?.title}</S.Title>
          {data?.user._id === authData?._id ? null : (
            <S.ButtonBlock>
              <S.Button
                onClick={() => addRecipe(data)}
                disabled={buttonStatus}
                cursor={buttonStatus ? "default" : "pointer"}
                hover={buttonStatus ? "#840505" : "#ae2a2f"}
              >
                {buttonStatus ? "Добавлено" : "Додати до книги рецептів"}
              </S.Button>
            </S.ButtonBlock>
          )}
        </S.ContentBlock>
        <S.ContentBlock>
          <S.ContentTime>
            <S.Text>{data?.time}</S.Text>
            <S.ContentImg src={SaucepanIcon} alt="img" />
          </S.ContentTime>
          <S.Text>{data?.calorie}</S.Text>
          <S.Text>{data?.weight}</S.Text>
        </S.ContentBlock>
      </S.Content>
      <S.DescriptionBlock>
        <S.List>
          <S.ListTitle>Список продуктів:</S.ListTitle>
          <S.ListDescription>{data?.productList}</S.ListDescription>
        </S.List>
        <S.Info>
          <S.InfoTitle>Метод приготування:</S.InfoTitle>
          <S.InfoText>{data?.description}</S.InfoText>
        </S.Info>
      </S.DescriptionBlock>
      <Slider slides={data} size={true} />
      <FeedbackBlock id={data && data.user._id} />
    </S.Container>
  );
};

export default FullPost;
