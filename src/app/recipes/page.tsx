import React from 'react';
import { CardActionArea, Grid, Paper, Typography } from '@mui/material';
import classes from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import useRecipe from '@/hooks/useRecipe';
import Loading from '@/components/Loader';
import recipe from '@/slice/recipe';
import { notFound } from 'next/navigation';

const RecipeList: React.FC = () => {
  const { recipeEntries: recipes, isLoading, isError } = useRecipe();

  if (isError) {
    return notFound();
  }

  if (isLoading || !recipe) {
    return <Loading />;
  }
  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {recipes &&
          recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
              <Link href={`/recipes/${recipe.id}`}>
                <CardActionArea>
                  <Paper className={classes.paper}>
                    <Typography variant='h2' component='h2'>
                      {classes.title}
                    </Typography>
                    <Image
                      src={recipe.image?.file?.url}
                      alt={recipe.title}
                      width={500}
                      height={300}
                      className={classes.image}
                    />
                    <Typography variant='body2' className={classes.title}>
                      <ReactMarkdown>{recipe.title}</ReactMarkdown>
                    </Typography>
                  </Paper>
                </CardActionArea>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default RecipeList;
