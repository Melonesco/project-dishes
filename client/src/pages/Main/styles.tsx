// import styled from "styled-components";
// import { Link } from "react-router-dom";
//
// export const Main = styled.main`
//   padding: 50px 0;
//   max-width: 2200px;
//   margin: 0 auto;
// `;
//
// export const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 140px;
// `;
//
// export const BackgroundImg = styled.img`
//   position: absolute;
//   top: 0;
//   width: 100%;
//   max-width: 2200px;
//   z-index: -100;
// `;
//
// export const BlockDreamMeal = styled.div`
//   position: relative;
//   width: 421px;
//   height: 421px;
//   background: rgba(174, 42, 47, 0.68);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;
// export const DreamMealImg = styled.img``;
// export const DreamMealTitle = styled.h2`
//   position: absolute;
//   top: 90px;
//   left: 30px;
//   max-width: 280px;
//   font-weight: 700;
//   font-size: 36px;
//   line-height: 47px;
//   color: #ffffff;
//   text-transform: uppercase;
// `;
//
// export const Dishes = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 65px;
//   padding: 0 140px;
//   margin-top: 20px;
// `;
//
// export const Links = styled(Link)`
//   position: relative;
//   cursor: pointer;
//   width: 220px;
//   height: 128px;
//   border-radius: 24px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//
//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//   }
// `;
//
// export const DishesImg = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: auto;
//   z-index: -1;
// `;
// export const DishesTitle = styled.h2`
//   font-weight: 700;
//   font-size: 20px;
//   line-height: 26px;
//   color: #ffffff;
// `;
//
// export const Title = styled.h2`
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 63px;
//   text-align: center;
//   color: #ae2a2f;
// `;
//
// export const TitleLine = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
// `;
//
// export const Line = styled.span`
//   width: 100%;
//   border-bottom: 3px solid #840505;
// `;

import styled from "styled-components";
import BackgroundImg from "../../assets/images/FoodBackground.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  padding: 30px 140px;
  position: relative;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlockDreamMeal = styled.div`
  position: relative;
  width: 421px;
  height: 421px;
  background: rgba(174, 42, 47, 0.68);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const DreamMealImg = styled.img``;
export const DreamMealTitle = styled.h2`
  position: absolute;
  top: 90px;
  left: 30px;
  max-width: 280px;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #ffffff;
  text-transform: uppercase;
`;

interface IDishes {
  changeHeight: string;
  marginBottom: string;
}

export const Dishes = styled.div<IDishes>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 0 140px;
  margin-top: ${(props) => props.changeHeight};
  margin-bottom: ${(props) => props.marginBottom};
  z-index: 5;
`;

export const Links = styled(Link)`
  position: relative;
  cursor: pointer;
  width: 260px;
  height: 160px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const DishesImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
`;
export const DishesTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  z-index: 2;
`;

export const TitleBlock = styled.div`
  padding: 0 140px;
  z-index: 30;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 63px;
  text-align: center;
  color: #ae2a2f;
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.span`
  width: 100%;
  border-bottom: 3px solid #840505;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 120px;
`;

export const ButtonMore = styled.button`
  text-align: center;
  border: none;
  background-color: #840505;
  font-size: 32px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ae2a2f;
  }
`;
