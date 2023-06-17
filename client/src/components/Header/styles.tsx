import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 65px;
  background-color: #ae2a2f;
`;

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const Logo = styled.img``;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 4px;
  padding: 0 10px;
  background-color: transparent;
  transition: all 0.2s ease;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const UserBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50%;
  border-radius: 50%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Links = styled(NavLink)`
  background-color: #840505;
  border-radius: 55px;
  width: 100px;
  padding: 0 20px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(5px);
  }
`;

export const RegisterBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const SignInText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
