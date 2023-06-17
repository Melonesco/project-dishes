import React, { useState } from "react";
import { IDish, IRation } from "../../utils/types";
import DeleteIcon from "../../assets/images/deleteIcon.svg";
import * as S from "./styles";
import FoodCard from "../FoodCard";
import instance from "../../axios";

interface IRationBlock {
  ration: IRation;
}

const RationBlock = ({ ration }: IRationBlock) => {
  const [expand, setExpand] = useState(false);

  const handleDelete = (id: IRation) => {
    instance.delete(`/ration/${id._id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
      console.log(res);
    });
  };

  return (
    <S.Container>
      <S.Block>
        <S.Info>
          <S.Title>{ration.title}</S.Title>
          {ration.dishes.length > 0
            ? ration.dishes.map((obj: IDish) => (
                <>
                  <S.Text>{obj.title}</S.Text>
                  <S.DishBlock>
                    {expand ? (
                      <FoodCard
                        dish={obj}
                        handleClick={null}
                        changeButton={null}
                      />
                    ) : null}
                  </S.DishBlock>
                </>
              ))
            : "Ви не вибрали страви"}
        </S.Info>
        <S.ButtonExpand onClick={() => setExpand(true)}>
          розгорнути
        </S.ButtonExpand>
      </S.Block>
      <S.ButtonDelete
        src={DeleteIcon}
        onClick={() => handleDelete(ration)}
        alt="icon"
      />
    </S.Container>
  );
};

export default RationBlock;
