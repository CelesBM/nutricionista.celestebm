import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerHeaderStyled = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid rgb(151, 172, 233);
  width: 100%;
  height: 70px;
  padding: 10px;

  @media (min-width: 768px) {
    height: 90px;
    padding: 25px;
  }
`;

export const HomeIconStyled = styled.div`
  cursor: pointer;
  color: #2f70f1;
  font-size: 30px;

  &:hover {
    color: #1252d0;
  }

  @media (min-width: 500px) {
    font-size: 36px;
  }

  @media (min-width: 600px) {
    font-size: 40px;
  }

  @media (min-width: 1250px) {
    font-size: 50px;
  }
`;

export const HamburgerIconStyled = styled.div`
  cursor: pointer;
  color: #2f70f1;
  font-size: 30px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #1252d0;
  }

  @media (min-width: 500px) {
    font-size: 36px;
  }

  @media (min-width: 600px) {
    font-size: 40px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkHeaderStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const LinkHomeStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #2f70f1;
`;

export const ContainerLinksStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const SpanStyled = styled.div`
  display: none;
  cursor: pointer;
  color: #1a57d0;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: #0b46bb;
    text-shadow: 2px -2px 8px rgba(102, 204, 255, 0.5);
  }

  @media (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }

  @media (min-width: 900px) {
    font-size: 18px;
  }

  @media (min-width: 1250px) {
    font-size: 19px;
  }
`;
