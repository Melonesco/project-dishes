import React from "react";
import PlusIcon from "../../assets/images/plus.svg";
import RemoveIcon from "../../assets/images/deleteIcon.svg";
import { IImage } from "../../pages/CulinaryHideaway/Layout/CreatePersonalRecipe/CreatePersonalRecipe";
import * as S from "./styles";

interface IUploadMorePhoto {
  images: IImage[];
  setImages: React.Dispatch<React.SetStateAction<IImage[]>>;
  handleImageUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    isMultiple?: boolean
  ) => Promise<void>;
}

const UploadMorePhoto = ({
  images,
  setImages,
  handleImageUpload,
}: IUploadMorePhoto) => {
  const handleRemove = (value: any) => {
    const res = images.filter((obj: any) => obj.id !== value);
    setImages(res);
  };

  return (
    <>
      <S.LabelText>Додайте кілька фото приготування страви</S.LabelText>
      <S.ImagesBlock>
        <label>
          <S.UploadBlock>
            <S.ImageUpload src={PlusIcon} alt="Preview" />
          </S.UploadBlock>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleImageUpload(event, true)
            }
            accept="image/*"
          />
        </label>
        {images.length > 0
          ? images.map((image: any) => (
              <S.ImageBlock key={image.id}>
                <img
                  src={image && `http://localhost:5000${image.imageUrl}`}
                  alt="img"
                />
                <S.ButtonRemoveImage
                  onClick={() => handleRemove(image.id)}
                  src={RemoveIcon}
                  alt="icon"
                />
              </S.ImageBlock>
            ))
          : null}
      </S.ImagesBlock>
    </>
  );
};

export default UploadMorePhoto;
