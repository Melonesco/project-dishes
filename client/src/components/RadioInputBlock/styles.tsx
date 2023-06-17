import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const Button = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  margin-right: 5px;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + ${Button}::after {
    background: #00ff00;
  }
`;

export const CustomRadio = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background: #d9d9d9;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${RadioInput}:checked + ${Button} & {
    background: #00ff00;
  }
`;
