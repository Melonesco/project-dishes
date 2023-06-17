import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 120px;
  max-width: 2400px;
  margin: 0 auto;
`;

export const TitleImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 27px;
  object-fit: cover;
  -webkit-box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.75);
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 63px;
  color: #ae2a2f;
`;

export const Text = styled.p<{ size?: string; lineHeight?: string }>`
  font-weight: 700;
  font-size: ${(props) => props.size || "20px"};
  line-height: ${(props) => props.size || "26px"};
  color: #6b6b6b;
`;

export const ContentImg = styled.img`
  width: 60px;
  height: auto;
`;

export const ContentTime = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

interface IButton {
  cursor: string;
  hover: string;
}

export const Button = styled.button<IButton>`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  background: #840505;
  border-radius: 19px;
  border: none;
  margin: 20px 0;
  padding: 12px 24px;
  cursor: ${(props) => props.cursor};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 30px;
  margin: 30px 0;
`;

export const List = styled.div`
  background: #840505;
  border-radius: 40px;
  padding: 10px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 430px;
  margin-top: 36px;
`;

export const ListTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;

  color: #ffffff;
`;

export const ListDescription = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 31px;

  color: #ffffff;
`;

export const Info = styled.div``;
export const InfoTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  text-align: center;
  margin-bottom: 10px;

  color: #6b6b6b;
`;

export const InfoText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #6b6b6b;
`;
