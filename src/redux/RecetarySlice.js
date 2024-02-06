import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  filteredRecipes: [],
  activeCategory: "All",
};

const recetarySlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
      state.filteredRecipes = action.payload;
    },
    filteredRecipesByCategory(state, action) {
      const category = action.payload;
      state.activeCategory = category;
      if (category === "All") {
        state.filteredRecipes = state.recipes;
      } else {
        state.filteredRecipes = state.recipes.filter((recipe) =>
          recipe.category.includes(category)
        );
      }
    },
  },
});

export const { setRecipes, filteredRecipesByCategory } = recetarySlice.actions;

export const selectRecipes = (state) => state.recipes.filteredRecipes;
export const selectActiveCategory = (state) => state.recipes.activeCategory;

export default recetarySlice.reducer;
