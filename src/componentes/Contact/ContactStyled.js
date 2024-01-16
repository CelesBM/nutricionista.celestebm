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

  h2 {
    font-size: 20px;
    color: #2f70f1;
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

  label {
    font-size: 15px;
    color: #2f70f1;
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
`;
