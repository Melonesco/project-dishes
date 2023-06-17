import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

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

export const Block = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-right: 40px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #840505;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
`;

export const DishBlock = styled.div`
  margin-top: 10px;
`;

export const ButtonExpand = styled.p`
  color: #ae2a2f;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #840505;
  }
`;

export const ButtonDelete = styled.img`
  cursor: pointer;
  width: 40px;
`;
