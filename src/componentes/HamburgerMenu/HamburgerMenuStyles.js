import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerHamburgerStyled = styled(motion.div)`
  background-color: #bdd3fd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 10px;
  width: 100%;
  border-bottom-left-radius: 20px;
  position: absolute;
  top: 70px;
  right: 0px;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SpanStyled = styled.div`
  display: flex;
  cursor: pointer;
  color: #1a57d0;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: #0b46bb;
    text-shadow: 2px -2px 8px rgba(102, 204, 255, 0.5);
  }
`;
