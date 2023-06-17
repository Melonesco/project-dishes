import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 80px;
  right: 40px;
  background: #840505;
  border-radius: 40px;
  width: 300px;
  height: 340px;
  padding: 5px 20px;
  z-index: 20;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalUserName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ModalName = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
`;

export const ModalStatus = styled.p`
  font-weight: 700;
  font-size: 10px;
  line-height: 13px;
  color: #797979;
`;

export const ModalImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

export const Fields = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 12px;
`;

export const ModalInput = styled.input`
  height: 30px;
  outline: none;
  border: none;
  background-color: transparent;
  font-weight: bold;
  letter-spacing: 1px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ModalButtonSubmit = styled.button`
  width: 100%;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #840505;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const ModalButton = styled.div`
  width: 100%;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #840505;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 6px;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
