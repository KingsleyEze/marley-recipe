'use client';
import { useDispatch, useSelector } from '@/redux/hooks';
import { selectRecipeById, setRecipes } from '@/slice/recipe';
import { useGetRecipesQuery } from '@/redux/services/recipieApi';

const useRecipe = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getRecipeById = (id: string) => useSelector(selectRecipeById(id));

  const {
    data: recipeEntries,
    isLoading,
    isSuccess,
    isError,
  } = useGetRecipesQuery();

  if (isSuccess && recipeEntries) {
    dispatch(setRecipes(recipeEntries));
  }

  return { recipeEntries, getRecipeById, isLoading, isError };
};

export default useRecipe;
