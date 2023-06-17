import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 60px;
  gap: 40px;
  margin-top: 40px;

  &::after {
    content: "";
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #840505;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;

export const UserName = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #797979;
`;

export const UserText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  color: #797979;
`;

export const ButtonBlock = styled.div`
  height: 100%;
`;

interface IButton {
  text?: string;
  background?: string;
}

export const Button = styled.button<IButton>`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  color: ${(props) => props.text};
  border: 1px solid #840505;
  background: ${(props) => props.background};
  border-radius: 19px;
  padding: 10px 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ae2a2f;
    color: #ffffff;
    border: 1px solid #ae2a2f;
  }

  &:last-child {
    margin-top: 12px;
    background-color: #840505;
    color: #ffffff;

    &:hover {
      background-color: #ae2a2f;
      border: 1px solid #ae2a2f;
    }
  }
`;
