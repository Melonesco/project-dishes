import React, { useState } from "react";
import PlusIcon from "../../../../assets/images/plus.svg";
import { useDispatch } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/store";
import { addDish } from "../../../../redux/dish/slice";
import { useForm, Controller } from "react-hook-form";
import instance from "../../../../axios";
import RadioInputBlock from "../../../../components/RadioInputBlock";
import * as GS from "../styles";
import * as S from "./styles";
import UploadMorePhoto from "../../../../components/UploadMorePhoto";
import { v4 as uuidv4 } from "uuid";

export interface FormData {
  dishTitle: string;
  dishWeight: string;
  dishTime: string;
  dishCalorie: string;
  dishType: string;
  dishProductList: string;
  dishDescription: string;
}

export interface IImage {
  id: string;
  imageUrl: string;
}

const CreatePersonalRecipe = () => {
  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [currentButton, setCurrentButton] = useState(true);
  const [images, setImages] = useState<IImage[] | []>([]);
  const id = uuidv4();

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      dishTitle: "",
      dishWeight: "",
      dishTime: "",
      dishCalorie: "",
      dishType: "",
      dishProductList: "",
      dishDescription: "",
    },
    mode: "onChange",
  });

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    isMultiple: boolean = false
  ) => {
    try {
      const formData = new FormData();
      const file = event.target.files![0];
      formData.append("image", file);
      const { data } = await instance.post("/upload/dishes/images", formData);
      if (isMultiple) {
        setImages([...images, { id: id, imageUrl: data.url }]);
      } else {
        setImagePreview(data.url);
      }
    } catch (err) {
      console.warn(err);
      alert("Error in the download file");
    }
  };

  const onSubmit = (values: FormData) => {
    const data = {
      title: values.dishTitle,
      weight: values.dishWeight,
      time: values.dishTime,
      calorie: values.dishCalorie,
      type: values.dishType,
      productList: values.dishProductList,
      description: values.dishDescription,
      imageUrl: imagePreview,
      status: currentButton,
      imagesUrl: images,
    };

    const result = dispatch(addDish(data));
    if (result) {
      reset();
      setImagePreview(null);
      setCurrentButton(true);
      setImages([]);
      alert("Ви успішно створили власну страву");
      window.location.reload();
    }
  };

  return (
    <>
      <GS.Title>Додай свою власну страву</GS.Title>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <GS.Label>
          Назва страви
          <S.Input
            maxLength={100}
            type="text"
            {...register("dishTitle", {
              required: "Це поле є обов'язковим",
            })}
          />
          <S.ErrorMessage>{errors.dishTitle?.message}</S.ErrorMessage>
        </GS.Label>
        <S.FirstContainer>
          <GS.Label>
            Вага страви
            <S.Input
              maxLength={100}
              type="text"
              {...register("dishWeight", {
                required: "Це поле є обов'язковим",
              })}
            />
            <S.ErrorMessage>{errors.dishWeight?.message}</S.ErrorMessage>
          </GS.Label>
          <GS.Label>
            Час приготування
            <S.Input
              maxLength={100}
              type="text"
              {...register("dishTime", {
                required: "Це поле є обов'язковим",
              })}
            />
            <S.ErrorMessage>{errors.dishTime?.message}</S.ErrorMessage>
          </GS.Label>
          <GS.Label>
            Кількість калорій
            <S.Input
              maxLength={100}
              type="text"
              {...register("dishCalorie", {
                required: "Це поле є обов'язковим",
              })}
            />
            <S.ErrorMessage>{errors.dishCalorie?.message}</S.ErrorMessage>
          </GS.Label>
        </S.FirstContainer>
        <S.RadioContainer>
          <RadioInputBlock
            currentButton={currentButton}
            setCurrentButton={setCurrentButton}
            firstValue={"Публічний"}
            secondValue={"Приватний"}
          />
        </S.RadioContainer>
        <S.ErrorMessage>{errors.dishType?.message}</S.ErrorMessage>
        <Controller
          control={control}
          name="dishType"
          rules={{ required: "Виберіть категорію" }}
          render={({ field }) => (
            <S.Select value={field.value} onChange={field.onChange}>
              <option value="">Виберіть категорію страви</option>
              <option value="simpleDish">Проста страва</option>
              <option value="pasta">Паста</option>
              <option value="hotDish">Гаряча страва</option>
              <option value="dessert">Десерт</option>
            </S.Select>
          )}
        />
        <S.SecondContainer>
          <GS.Label>
            Список продуктів
            <S.Textarea
              {...register("dishProductList", {
                required: "Це поле є обов'язковим",
              })}
            />
            <S.ErrorMessage>{errors.dishProductList?.message}</S.ErrorMessage>
          </GS.Label>
          <GS.Label>
            Фото готової страви
            <S.ImagePreviewContainer>
              <S.ImagePreview
                src={
                  imagePreview
                    ? `http://localhost:5000${imagePreview}`
                    : PlusIcon
                }
                alt="Preview"
                isIcon={!imagePreview}
              />
            </S.ImagePreviewContainer>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={(event) => handleImageUpload(event)}
              accept="image/*"
            />
          </GS.Label>
        </S.SecondContainer>
        <GS.Label>
          Короткий опис приготування страви
          <S.Textarea
            {...register("dishDescription", {
              required: "Це поле є обов'язковим",
            })}
          />
          <S.ErrorMessage>{errors.dishDescription?.message}</S.ErrorMessage>
        </GS.Label>
        <UploadMorePhoto
          images={images}
          setImages={setImages}
          handleImageUpload={handleImageUpload}
        />
        <S.ButtonSubmit type="submit">Відправити</S.ButtonSubmit>
      </S.Form>
    </>
  );
};

export default CreatePersonalRecipe;
