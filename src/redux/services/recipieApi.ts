import { fetchRecipes } from '@/lib/api';
import { Recipe } from '@/lib/types';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  refetchOnFocus: true,
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Recipes'],
  endpoints: (builder) => ({
    getRecipes: builder.query<Recipe[], void>({
      queryFn: async () => {
        const recipes = await fetchRecipes();
        return {
          data: recipes,
        };
      },
      providesTags: ['Recipes'],
    }),
  }),
});

export const { useGetRecipesQuery } = recipeApi;
