import { Entry, Recipe, Chef, Tag, Image } from './types';

export const transformRecipeData = (recipeData: any): RecipeData => {
  const recipes = transformRecipes(recipeData.items, recipeData.includes);

  return recipes;
};

export type RecipeData = Recipe[];

const transformRecipes = (recipes: Array<Entry>, includes: any): RecipeData => {
  const tagMap: Record<string, Tag> = {};
  const chefMap: Record<string, Chef> = {};
  const imageMap: Record<string, Image> = {};

  includes.Entry.forEach((entry: Entry) => {
    if (entry.sys.contentType.sys.id === 'tag') {
      const tag: Tag = {
        id: entry.sys.id,
        name: entry.fields.name,
      };
      tagMap[entry.sys.id] = tag;
    } else if (entry.sys.contentType.sys.id === 'chef') {
      const chef: Chef = {
        id: entry.sys.id,
        name: entry.fields.name,
      };
      chefMap[entry.sys.id] = chef;
    }
  });

  includes.Asset.forEach((asset: Entry) => {
    const image: Image = {
      id: asset.sys.id,
      title: asset.fields.title,
      file: {
        url: `https:${asset.fields.file.url}`,
      },
    };
    imageMap[asset.sys.id] = image;
  });

  return recipes.map((recipeEntry: Entry) => {
    const recipe: Recipe = {
      id: recipeEntry.sys.id,
      title: recipeEntry.fields.title,
      description: recipeEntry.fields.description,
      calories: recipeEntry.fields.calories,
      image: imageMap[recipeEntry.fields.photo.sys.id],
      chef: chefMap[recipeEntry.fields.chef?.sys.id],
      tags: recipeEntry.fields.tags?.map(
        (tagEntry: Entry) => tagMap[tagEntry.sys.id],
      ),
    };
    return recipe;
  });
};
