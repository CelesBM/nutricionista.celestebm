import React from "react";
import { ContainerInfoStyled, ButtonInfoStyled } from "./InfoStyled";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <>
      <ContainerInfoStyled>
        <p>
          Bienvenidos a mi espacio! soy Licenciada en Nutrición recibida en la
          Universidad de Buenos Aires. <br /> A lo largo de estos años, me
          especialicé en Nutrición Deportiva, Vegetariana y/o Vegana,
          Mindfulness y, además, soy antropometrista ISAK II. <br /> Por lo
          tanto, si tu objetivo es mejorar tus hábitos alimenticios, optimizar
          tu composición corporal, buscar un mejor rendimiento para tu deporte,
          transicionar hacia el vegetarianismo y/o veganismo o, simplemente
          medir tu composición corporal, te invito a ver mis servicios
          disponibles!
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
          <ButtonInfoStyled to="/Services">Ver Servicios</ButtonInfoStyled>
        </motion.div>
      </ContainerInfoStyled>
    </>
  );
};

export default Info;
