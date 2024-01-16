import styled from "styled-components";

export const ContainerHeroStyled = styled.section`
  background-image: url("https://i.blogs.es/787087/nutricion-deportiva/1366_2000.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 70px;
  padding: 50px 20px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    padding: 50px 40px;
  }

  @media (min-width: 700px) {
    padding: 50px 50px;
  }

  @media (min-width: 768px) {
    margin-top: 90px;
  }

  @media (min-width: 800px) {
    padding: 50px 90px;
  }
`;

export const ContainerTextStyled = styled.div`
  background-color: #bdd3fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  border-radius: 10rem;
  gap: 10px;

  @media (min-width: 600px) {
    padding: 45px;
    gap: 15px;
  }

  @media (min-width: 900px) {
    padding: 60px;
    gap: 20px;
  }

  h2 {
    font-size: 20px;
    color: #2f70f1;
  }

  @media (min-width: 600px) {
    h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 900px) {
    h2 {
      font-size: 28px;
    }
  }

  p {
    list-style: none;
    font-size: 15px;
    color: #2f70f1;
  }

  @media (min-width: 600px) {
    p {
      font-size: 17px;
    }
  }

  @media (min-width: 900px) {
    p {
      font-size: 20px;
    }
  }
`;
