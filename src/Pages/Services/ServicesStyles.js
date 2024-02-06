import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerServicesStyled = styled.section`
  background-color: #bdd3fd;
  margin-top: 70px;
  padding: 30px 20px;
  border-bottom: 3px solid rgb(151, 172, 233);

  @media (min-width: 768px) {
    padding: 50px 20px;
  }
`;

export const ServiceStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 20px;
  line-height: 20px;

  @media (min-width: 600px) {
    line-height: 30px;
  }

  h3 {
    color: #2f70f1;
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 500px) {
    h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 600px) {
    h3 {
      font-size: 22px;
    }
  }

  @media (min-width: 900px) {
    h3 {
      font-size: 24px;
    }
  }

  ul li {
    margin-bottom: 7px;
    color: #777b84;
    font-size: 15px;

    text-align: justify;
  }

  p {
    color: #778197;
    font-size: 15px;
    font-style: italic;
    text-align: center;
  }

  @media (min-width: 500px) {
    ul li,
    p {
      font-size: 17px;
    }
  }

  @media (min-width: 600px) {
    ul li,
    p {
      font-size: 18px;
    }
  }

  @media (min-width: 900px) {
    p {
      margin-top: 25px;
    }
  }
`;

export const MotionServiceStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconServiceStyled = styled.div`
  color: #2f70f1;
`;
