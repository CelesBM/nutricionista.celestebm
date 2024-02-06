import styled from "styled-components";

export const ContainerAboutStyled = styled.section`
  background-color: #bdd3fd;
  margin-top: 70px;
  padding: 30px 20px;
  border-bottom: 3px solid rgb(151, 172, 233);

  @media (min-width: 400px) {
    padding: 40px 20px;
  }

  @media (min-width: 700px) {
    margin-top: 10px;
    padding: 120px 20px;
  }

  @media (min-width: 700px) {
    padding: 120px 40px;
  }

  @media (min-width: 1250px) {
    padding: 160px 40px;
  }

  p {
    color: #1a57d0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }

  @media (min-width: 400px) {
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }

  @media (min-width: 500px) {
    p {
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (min-width: 1250px) {
    p {
      font-size: 21px;
      line-height: 36px;
    }
  }
`;
