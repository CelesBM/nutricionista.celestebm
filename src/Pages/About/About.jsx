import React from "react";
import Header from "../../componentes/Header/Header";
import { ContainerAboutStyled } from "./AboutStyles";
import Footer from "../../componentes/Footer/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Header />

      <ContainerAboutStyled>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {" "}
          <p>
            Hola! por aquí paso a contarles un poco sobre mí. <br /> Soy
            Celeste, me recibí como Licenciada en Nutrición en el año 2017 en la
            Universidad de Buenos Aires. <br /> A su vez, soy profesora de
            danzas clásicas, por lo que siempre me interesó la nutrición
            deportiva. Entonces, al terminar mi carrera mi primer posgrado fue
            en Nutrición Deportiva, complementándolo con el método ISAK II, que
            me permite medir la composición corporal, lo cual es fundamental
            para esta área. <br />
            Por otro lado, dado a al creciente aumento de población vegetariana
            y vegana, decidí especializarme y, en este proceso, cambié mi forma
            de alimentación a tal punto que hoy en día tengo una alimentación
            basada en plantas, ya que tomé conciencia sobre la importancia de
            cuidar al medio ambiente y a todos los seres vivos.
            <br /> Hoy en día, principalmente estoy dedicada a personas que
            quieren mejorar su salud y estética logrando cambios en su
            composición corporal, a la nutrición deportiva, tanto para personas
            omnívoras como vegetarianas, y a las personas que están
            transicionando o ya llevan a cabo una alimentación vegetariana /
            vegana.
            <br /> Te invito a hacer un cambio en tu vida y hábitos y mejorar tu
            alimentación y estado físico, no te dejes para después!
          </p>
        </motion.div>
      </ContainerAboutStyled>

      <Footer />
    </>
  );
};

export default About;
