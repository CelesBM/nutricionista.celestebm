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

  @media (min-width: 768px) {
    margin-top: 90px;
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

  h2 {
    font-size: 20px;
    color: #2f70f1;
  }

  p {
    list-style: none;
    font-size: 15px;
    color: #2f70f1;
  }
`;
