import styled from "styled-components";

export const LabelText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
  margin-bottom: 4px;
`;

export const UploadBlock = styled.div`
  height: 200px;
  border: 1px solid #ae2a2f;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImageUpload = styled.img`
  width: 60px;
`;

export const ImagesBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-gap: 30px;
  align-items: center;
`;

export const ImageBlock = styled.div`
  position: relative;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    &:first-child {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ButtonRemoveImage = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 36px;
  cursor: pointer;
  background-color: #ffffff;
  padding: 4px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: yellowgreen;
  }
`;
