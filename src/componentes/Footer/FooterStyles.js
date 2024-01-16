import styled from "styled-components";

export const ContainerFooterStyled = styled.footer`
  display: flex;
  height: 120px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 13px;
    color: #2f70f1;
  }
  h3 {
    font-size: 13px;
    color: #2f70f1;
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

  p {
    font-size: 12px;
  }
`;
