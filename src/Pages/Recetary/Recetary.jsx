import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipes,
  filteredRecipesByCategory,
} from "../../redux/RecetarySlice";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import CardRecipe from "../../componentes/Recipe/CardRecipe";
import { cookingRecipes as recipesData } from "../../data/recetaryData";
import {
  ContainerRecetaryStyled,
  ContainerButtonsStyled,
  ButtonStyled,
  ContainerRecipesStyled,
} from "./RecetaryStyles";

const Recetary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.filteredRecipes);

  useEffect(() => {
    dispatch(setRecipes(recipesData));
  }, [dispatch]);

  const handleFilterByCategory = (category, recipe) => {
    dispatch(filteredRecipesByCategory(category));
    setActiveCategory(category);
  };

  return (
    <>
      <Header />
      <ContainerRecetaryStyled>
        <ContainerButtonsStyled
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <ButtonStyled
            onClick={() => handleFilterByCategory("All")}
            style={{
              backgroundColor: activeCategory === "All" ? "#E9F0FF" : "initial",
            }}
          >
            Todas las recetas
          </ButtonStyled>
          <ButtonStyled
            onClick={() => handleFilterByCategory("vegetarian")}
            style={{
              backgroundColor:
                activeCategory === "vegetarian" ? "#E9F0FF" : "initial",
            }}
          >
            Vegetarianas
          </ButtonStyled>
          <ButtonStyled
            onClick={() => handleFilterByCategory("vegan")}
            style={{
              backgroundColor:
                activeCategory === "vegan" ? "#E9F0FF" : "initial",
            }}
          >
            Veganas
          </ButtonStyled>
          <ButtonStyled
            onClick={() => handleFilterByCategory("candy")}
            style={{
              backgroundColor:
                activeCategory === "candy" ? "#E9F0FF" : "initial",
            }}
          >
            Dulces
          </ButtonStyled>
          <ButtonStyled
            onClick={() => handleFilterByCategory("breakfast")}
            style={{
              backgroundColor:
                activeCategory === "breakfast" ? "#E9F0FF" : "initial",
            }}
          >
            Desayuno / Merienda
          </ButtonStyled>
          <ButtonStyled
            onClick={() => handleFilterByCategory("dinner")}
            style={{
              backgroundColor:
                activeCategory === "dinner" ? "#E9F0FF" : "initial",
            }}
          >
            Almuerzo / cena
          </ButtonStyled>
        </ContainerButtonsStyled>
        <ContainerRecipesStyled
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.7 }}
        >
          {recipes.map((recipe) => (
            <CardRecipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </ContainerRecipesStyled>
      </ContainerRecetaryStyled>
      <Footer />
    </>
  );
};

export default Recetary;
