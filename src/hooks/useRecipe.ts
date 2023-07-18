'use client';
import { useDispatch, useSelector } from '@/redux/hooks';
import { selectRecipeById, setRecipes } from '@/slice/recipe';
import { useGetRecipesQuery } from '@/redux/services/recipieApi';
import { useEffect } from 'react';

const useRecipe = () => {
  const dispatch = useDispatch();
  const getRecipeById = (id: string) => useSelector(selectRecipeById(id));

  const {
    data: recipeEntries,
    isLoading,
    isSuccess,
    isError,
  } = useGetRecipesQuery();

  useEffect(() => {
    if (isSuccess && recipeEntries) {
      dispatch(setRecipes(recipeEntries));
    }
  }, []);

  return { recipeEntries, getRecipeById, isLoading, isError };
};

export default useRecipe;
