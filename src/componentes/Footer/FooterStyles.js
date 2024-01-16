import styled from "styled-components";

export const ContainerFooterStyled = styled.footer`
  display: flex;
  height: 120px;
  padding: 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1250px) {
    padding: 30px;
  }

  h2,
  h3 {
    font-size: 13px;
    color: #2f70f1;
  }

  @media (min-width: 500px) {
    h2,
    h3 {
      font-size: 15px;
    }
  }

  @media (min-width: 500px) {
    h2,
    h3 {
      font-size: 17px;
    }
  }
`;

export const ContainerInfoFooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerMediasFooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MediaFooterStyled = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: gray;
  }

  img {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 600px) {
    img {
      width: 40px;
      height: 40px;
    }
  }

  p {
    font-size: 12px;
  }

  @media (min-width: 500px) {
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 600px) {
    p {
      font-size: 16px;
    }
  }
`;
