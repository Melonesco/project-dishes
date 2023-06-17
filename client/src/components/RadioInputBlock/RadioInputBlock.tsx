import React from "react";
import * as S from "./styles";

interface IRadioInputBlock {
  currentButton: boolean;
  setCurrentButton: React.Dispatch<React.SetStateAction<boolean>>;
  firstValue: string;
  secondValue: string;
}

const RadioInputBlock = ({
  currentButton,
  setCurrentButton,
  firstValue,
  secondValue,
}: IRadioInputBlock) => {
  return (
    <S.ButtonContainer>
      <S.RadioInput
        type="radio"
        id="own"
        name="buttonGroup"
        checked={currentButton}
        onChange={() => setCurrentButton(true)}
      />
      <S.Button htmlFor="own">
        <S.CustomRadio />
        <S.ButtonText>{firstValue}</S.ButtonText>
      </S.Button>

      <S.RadioInput
        type="radio"
        id="borrowed"
        name="buttonGroup"
        onChange={() => setCurrentButton(false)}
      />
      <S.Button htmlFor="borrowed">
        <S.CustomRadio />
        <S.ButtonText>{secondValue}</S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
};

export default RadioInputBlock;
