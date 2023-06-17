import styled from "styled-components";

export const SliderContainer = styled.div<{ width: string; height: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  box-shadow: inset 0px -88px 33px -9px rgba(0, 0, 0, 0.82);
  border-radius: 24px;
`;

export const Slide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SlideText = styled.p`
  position: absolute;
  bottom: 16px;
  left: 10px;
  color: #ffffff;
  z-index: 5;

  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  max-width: 440px;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;

export const Dot = styled.div<{ active: boolean; size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#333" : "#840505")};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;
