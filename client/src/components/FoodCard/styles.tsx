import styled from "styled-components";

export const RecipeBlock = styled.div`
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

export const RecipeImg = styled.img`
  width: 285px;
  height: 166px;
  box-shadow: inset 0px -45px 41px -9px rgba(0, 0, 0, 0.82);
  border-radius: 24px;
`;
export const RecipeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 40px;
  cursor: pointer;
`;

export const RecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RecipeTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #840505;
`;

export const RecipeText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
`;

export const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  flex-direction: row-reverse;
`;

export const RecipeIcon = styled.img`
  width: 32px;
`;

export const RecipeButton = styled.img`
  cursor: pointer;
  width: 40px;
`;
