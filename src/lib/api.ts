import { createClient } from "contentful";
import { transformRecipeData } from "./mapper";
import { Recipe, RecipeDataResponse } from "./types";
import { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } from './constant';

const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

const recipeEntries = {
  content_type: "recipe",
  select: "sys.id,fields",
};

export const fetchRecipes = (): Promise<Recipe[]> =>
  client
    .getEntries<RecipeDataResponse>(recipeEntries)
    .then((response) => transformRecipeData(response))
    .catch((err: Error) => {
      console.log(err);
      return [];
    });
