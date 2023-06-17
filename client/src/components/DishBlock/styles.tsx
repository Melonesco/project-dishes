import styled from "styled-components";

export const DishesBlocks = styled.div`
  padding: 80px 140px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 30px;
`;

export const DishBlock = styled.div`
  height: 260px;
  width: 100%;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const DishImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const DishContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;

export const DishTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 31px;
  color: #ffffff;
  padding: 10px;
`;

export const DishInfo = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 5;
  text-align: right;
`;

export const DishContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const DishText = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  padding: 0 5px;

  color: #ffffff;
`;
