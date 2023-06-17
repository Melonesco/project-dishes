import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ImgSearch = styled.img`
  width: 27px;
  height: 27px;
`;

export const InputSearch = styled.input`
  width: 300px;
  height: 36px;
  border: 1px solid #840505;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #840505;
  padding: 0 10px;
  outline: none;

  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &::placeholder {
    color: #840505;
  }
`;
