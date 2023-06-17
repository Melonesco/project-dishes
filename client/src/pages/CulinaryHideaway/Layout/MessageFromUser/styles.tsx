import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 60px;
  height: 160px;
  gap: 40px;

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
  position: relative;
  display: inline-block;
`;

export const UserImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const UserName = styled.p`
  position: absolute;
  left: 80px;
  top: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
`;

export const Message = styled.p`
  height: 100%;
  max-height: 120px;
  margin-left: 80px;
  margin-top: -30px;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #840505;
`;

export const ImgDelete = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
