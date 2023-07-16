export type Tag = {
  id: string,
  name: string
}

export type Chef = {
  id: string,
  name: string,
}

export type Image = {
  id: string,
  title: string,
  file: {
    url: string,
  }
}

export type Recipes = {
  id: string,
  title: string,
  description: string,
  calories: string,
  image: string,
  chef?: string,
  tags?: Array<string> 
}

export type Recipe = {
  id: string,
  title: string,
  description: string,
  calories: string,
  image: Image,
  chef?: Chef,
  tags?: Tag[]
}

export interface RecipeData {
  recipes: Record<string, Recipe>,
  tags: Record<string, Tag>,
  chefs: Record<string, Chef>,
  images: Record<string, Image>,
}

export type Entry = {
  fields: Record<string, any>
  sys: Record<string, any>
}

export type RecipeDataResponse = {
  items: Array<Entry>
  includes: {
    Asset: Array<Entry>,
    Entry: Array<Entry>
  }
  fields: any;
  contentTypeId: string;
}
