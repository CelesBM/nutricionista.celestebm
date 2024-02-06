import React from "react";
import { ContainerHeroStyled, ContainerTextStyled } from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <ContainerHeroStyled>
        <ContainerTextStyled
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <h2>Hola, soy Celeste!</h2>
          <p>
            Si estás buscando un cambio en tu alimentación, rendimiento y/o
            mejorar tu composición corporal, <br />
            estás en el lugar indicado!
          </p>
        </ContainerTextStyled>
      </ContainerHeroStyled>
    </>
  );
};

export default Hero;
