import styled from "styled-components";

export const ContainerContactStyled = styled.section`
  background-color: #bdd3fd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  height: 500px;
  text-align: center;
  padding: 30px;

  @media (min-width: 600px) {
    height: 600px;
  }

  @media (min-width: 900px) {
    padding: 30px 80px;
  }

  @media (min-width: 1250px) {
    height: 650px;
    padding: 30px 120px;
  }

  @media (min-width: 1300px) {
    height: 650px;
    padding: 30px 150px;
  }

  h2 {
    font-size: 20px;
    color: #2f70f1;
  }

  @media (min-width: 600px) {
    h2 {
      font-size: 25px;
    }
  }

  @media (min-width: 900px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const FormContactStyled = styled.form`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const DataFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;

  @media (min-width: 1250px) {
    gap: 10px;
  }

  label {
    font-size: 15px;
    color: #2f70f1;
  }

  @media (min-width: 600px) {
    label {
      font-size: 17px;
    }
  }

  @media (min-width: 900px) {
    label {
      font-size: 19px;
    }
  }

  input,
  textarea {
    cursor: pointer;
    padding: 4px 10px;
    width: 100%;
    border: solid 1px #fff;
    border-radius: 4px;
    margin-bottom: 15px;
    color: #2f70f1;
  }

  textarea {
    height: 80px;
  }

  @media (min-width: 600px) {
    input,
    textarea {
      padding: 8px 12px;
      width: 100%;
    }
  }
`;

export const ButtonContactStyled = styled.button`
  cursor: pointer;
  margin-top: 20px;
  background-color: #dee7fa;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 30px;
  border: solid 1px #2f70f1;
  border-radius: 1rem;
  color: #2f70f1;

  @media (min-width: 600px) {
    font-size: 17px;
    padding: 12px 50px;
  }

  @media (min-width: 900px) {
    font-size: 19px;
    padding: 12px 60px;
  }
`;
