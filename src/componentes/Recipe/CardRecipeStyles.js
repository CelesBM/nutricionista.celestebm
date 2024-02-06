import styled from "styled-components";

export const ContainerRecipeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0px;
  font-size: 14px;
  line-height: 22px;

  @media (min-width: 500px) {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    font-size: 17px;
  }

  @media (min-width: 1020px) {
    font-size: 18px;
  }

  h3 {
    color: #2f70f1;
    font-weight: bold;
  }
`;
