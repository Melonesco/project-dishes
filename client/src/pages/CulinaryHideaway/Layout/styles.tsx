import styled from "styled-components";

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 30px;
  color: #ae2a2f;
  transition: all 0.3s ease;
  position: relative;
  margin-bottom: 50px;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #840505;
    max-width: 480px;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: #797979;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  margin: 70px 0 40px 0;
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const EmptyText = styled.div`
  font-size: 32px;
  color: #840505;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;
