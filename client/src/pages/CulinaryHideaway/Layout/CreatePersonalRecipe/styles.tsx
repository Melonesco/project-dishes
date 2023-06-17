import styled from "styled-components";

export const Form = styled.form`
  margin: 70px 0;
`;

export const FirstContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  left: 528px;
  top: 254px;
  background-color: transparent;
  border: 1px solid #840505;
  border-radius: 4px;
  font-size: 20px;
  padding: 0 10px;
  outline: none;
  color: #840505;
`;

export const RadioContainer = styled.div`
  margin-bottom: 30px;
`;

export const SecondContainer = styled.div`
  display: flex;
  gap: 60px;
  height: 300px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  font-size: 20px;
  color: #840505;
  border: 1px solid #840505;
`;

export const ImagePreviewContainer = styled.div`
  border: 1px solid #840505;
  border-radius: 26px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

export const ImagePreview = styled.img<{ isIcon: boolean }>`
  width: ${({ isIcon }) => (isIcon ? "60px" : "100%")};
  height: ${({ isIcon }) => (isIcon ? "auto" : "100%")};
  object-fit: ${({ isIcon }) => (isIcon ? "contain" : "cover")};
`;

export const ButtonSubmit = styled.button`
  margin-top: 40px;
  background-color: #ae2a2f;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  float: right;

  &:hover {
    background-color: #840505;
  }
`;

export const ErrorMessage = styled.div`
  color: #ae2a2f;
  font-weight: bold;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #840505;
  border-radius: 4px;
  font-size: 20px;
  padding: 0 10px;
  outline: none;
  color: #840505;
  cursor: pointer;
  margin: 10px 0 40px 0;
`;
