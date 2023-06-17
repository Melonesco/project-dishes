import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
`;

export const Input = styled.input`
  width: 305px;
  height: 40px;
  border: 1px solid #ffffff;
  padding: 0 10px;
  outline: none;
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ButtonSubmit = styled.button`
  background: #840505;
  border-radius: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 40px;

  &:hover {
    background-color: #ae2a2f;
  }
`;

export const ButtonRegister = styled(Link)`
  background: #797979;
  border-radius: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  margin-top: 20px;

  &:hover {
    background-color: #999999;
  }
`;

export const ErrorMessage = styled.pre`
  color: darkred;
  position: absolute;
  bottom: -24px;
`;

export const LabelUpload = styled.label`
  margin-top: 60px;
  width: 174px;
  height: 174px;
  position: absolute;
  right: -300px;
  border-radius: 50%;
  cursor: pointer;
`;

export const UploadBlock = styled.div`
  position: absolute;
  bottom: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 100%;
  text-align: center;

  h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
  }

  p {
    font-weight: 700;
    font-size: 11px;
    line-height: 14px;
    color: #ffffff;
  }
`;

export const ImagePreview = styled.img<{ isIcon: boolean }>`
  position: absolute;
  top: 0;
  width: 174px;
  height: 174px;
  border-radius: 50%;
  object-fit: ${({ isIcon }) => (isIcon ? "contain" : "cover")};
`;
