import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0;
`;

export const Text = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #6b6b6b;
  margin-bottom: 10px;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.textarea`
  background: #ffffff;
  border: 1px solid #840505;
  padding: 5px;
  width: 100%;
  color: #840505;
  font-size: 20px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  background: #840505;
  padding: 10px 14px;
  margin-left: 40px;
  border: none;
  border-radius: 19px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ae2a2f;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  color: #6b6b6b;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Block = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 60px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #840505;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
`;

export const UserMessage = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #840505;
  letter-spacing: 1px;
`;
