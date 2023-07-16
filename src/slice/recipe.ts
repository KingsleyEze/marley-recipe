import { Recipe } from '@/lib/types';
import { RootState } from '@/redux/store';
import { createSlice } from '@reduxjs/toolkit';

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: [],
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { setRecipes } = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipe.recipes;

export const selectRecipeById = (id: string) => (state: RootState) =>
  state.recipe.recipes.find((recipe: Recipe) => recipe.id === id);

export default recipeSlice.reducer;
