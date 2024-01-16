import styled from "styled-components";

export const ContainerInfoStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 550px;
  padding: 30px 20px;

  p {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    color: #2f70f1;
  }
`;

export const ButtonInfoStyled = styled.button`
  cursor: pointer;
  background-color: #bdd3fd;
  font-size: 15px;
  font-weight: 600;
  padding: 10px;
  border: solid 1px #2f70f1;
  border-radius: 1rem;
  color: #2f70f1;
`;
