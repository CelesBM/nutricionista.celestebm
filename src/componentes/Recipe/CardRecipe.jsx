import React from "react";
import { ContainerRecipeStyled } from "./CardRecipeStyles";

const CardRecipe = ({ id, title, ingredients, instructions }) => {
  console.log(title);
  return (
    <>
      <ContainerRecipeStyled>
        <h3>{title}</h3>
        <p>Ingredientes: {ingredients}</p>
        <p>Procedimiento: {instructions}</p>
      </ContainerRecipeStyled>
    </>
  );
};

export default CardRecipe;
