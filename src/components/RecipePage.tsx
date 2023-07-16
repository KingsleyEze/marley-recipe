'use client';
import React from 'react';
import RecipeList from '@/app/recipes/page';
import { Container } from '@mui/material';
import Header from './Header';

const RecipePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <RecipeList />
    </Container>
  );
};

export default RecipePage;
