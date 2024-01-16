import React from "react";
import { ContainerHeroStyled, ContainerTextStyled } from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <ContainerHeroStyled>
        <ContainerTextStyled>
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
