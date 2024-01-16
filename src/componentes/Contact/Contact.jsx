import React from "react";
import {
  ContainerContactStyled,
  FormContactStyled,
  DataFormStyled,
  ButtonContactStyled,
} from "./ContactStyled";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <ContainerContactStyled>
        <h2>Contacto</h2>
        <FormContactStyled>
          <DataFormStyled>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="phone">Teléfono:</label>
            <input type="number" id="phone" name="phone" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="issue">Asunto:</label>
            <textarea id="issue" name="issue" required />
          </DataFormStyled>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <ButtonContactStyled>Enviar</ButtonContactStyled>{" "}
          </motion.div>
        </FormContactStyled>
      </ContainerContactStyled>
    </>
  );
};

export default Contact;
