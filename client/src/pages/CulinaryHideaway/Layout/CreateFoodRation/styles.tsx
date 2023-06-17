import styled from "styled-components";

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 325px;
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

export const ButtonSubmit = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #ae2a2f;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #840505;
  }
`;

export const EmptyText = styled.p`
  font-size: 32px;
  color: #840505;
  font-weight: bold;
  text-align: center;
  margin: 40px 0 80px 0;
`;
