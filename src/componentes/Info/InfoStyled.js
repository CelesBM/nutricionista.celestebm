import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 550px;
  padding: 30px 20px;

  @media (min-width: 400px) {
    gap: 60px;
  }

  @media (min-width: 900px) {
    padding: 30px 60px;
  }

  p {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    color: #2f70f1;
  }

  @media (min-width: 400px) {
    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media (min-width: 500px) {
    p {
      font-size: 17px;
      line-height: 30px;
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 18px;
      line-height: 32px;
    }
  }

  @media (min-width: 768px) {
    p {
      line-height: 36px;
    }

    @media (min-width: 900px) {
      p {
        font-size: 20px;
      }
    }
  }
`;

export const ButtonInfoStyled = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  background-color: #bdd3fd;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
  border: solid 1px #2f70f1;
  border-radius: 1rem;
  color: #2f70f1;

  @media (min-width: 600px) {
    font-size: 18px;
    padding: 12px 16px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    padding: 13px 20px;
  }
`;
