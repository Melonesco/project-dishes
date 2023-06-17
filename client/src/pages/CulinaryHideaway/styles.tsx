import styled from "styled-components";

export const CulinaryHideaway = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 120px;
  max-width: 2400px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 60px;
`;

export const Buttons = styled.div`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Modal = styled.div`
  background: #ffffff;
  border: 1px solid #840505;
  border-radius: 20px;
  width: 306px;
  height: 191px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  padding: 10px;
`;

export const ModalField = styled.textarea`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
  width: 100%;
  height: 120px;
  border: none;
`;

export const ModalButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background: #840505;
  border-radius: 19px;
  padding: 10px 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ae2a2f;
  }
`;

interface IButtonProps {
  active: any;
}

export const Button = styled.button<IButtonProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #939393;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: 310px;
  text-align: start;

  &:hover,
  &:active {
    color: #ae2a2f;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #840505;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  ${({ active }) =>
    active &&
    `
    color: #ae2a2f;
    &:after {
      transform: scaleX(1);
    }
  `}
`;

export const ButtonSupport = styled.button`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  color: #ffffff;
  background: #840505;
  border: none;
  border-radius: 44.5px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  padding: 10px;
  margin-top: 40px;

  &:hover {
    background-color: #ae2a2f;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Span = styled.span`
  margin-top: 40px;
`;
