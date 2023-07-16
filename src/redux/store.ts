import { recipeSlice } from '@/slice/recipe';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { recipeApi } from './services/recipieApi';

export const store = configureStore({
  reducer: {
    [recipeSlice.name]: recipeSlice.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([recipeApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
