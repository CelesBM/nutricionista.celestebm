import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerRecetaryStyled = styled.section`
  background-color: #bdd3fd;
  margin-top: 50px;
  padding: 30px 20px;
  border-bottom: 3px solid rgb(151, 172, 233);

  @media (min-width: 768px) {
    padding: 50px 20px;
  }
`;

export const ContainerButtonsStyled = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px 0px;
`;

export const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: white;
  padding: 5px 12px;
  border-radius: 2rem;
  border: solid 2px #2f70f1;
  color: #575748;
  font-weight: bold;
  font-size: 14px;

  @media (min-width: 500px) {
    font-size: 15px;
  }

  @media (min-width: 600px) {
    font-size: 17px;
  }

  @media (min-width: 1020px) {
    font-size: 19px;
  }
`;

export const ContainerRecipesStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
