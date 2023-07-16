'use client';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';
import useRecipe from '@/hooks/useRecipe';
import classes from './page.module.css';
import Fab from '@mui/material/Fab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Link from 'next/link';
import Header from '@/components/Header';
import { notFound } from 'next/navigation';
import Loading from '@/components/Loader';
import RecipeRating from '@/components/Rating';

interface RecipeDetailsProps {
  params: {
    id: string;
  };
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ params }) => {
  const { id } = params;
  const { getRecipeById, isError, isLoading } = useRecipe();
  const recipe = getRecipeById(id);

  if (isError) {
    return notFound();
  }

  if (isLoading || !recipe) {
    return <Loading />;
  }

  const { title, chef, image, tags, description } = recipe;

  return (
    <Container>
      <Header />
      <Box className={classes.container}>
        <Card>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12} md={12} lg={12}>
              {image?.file?.url && (
                <Image
                  src={image.file.url}
                  alt={title}
                  width={600}
                  height={400}
                  className={classes.image}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <CardContent>
                <Typography variant='h4' gutterBottom>
                  {title}
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                  Chef: {chef?.name || 'N/A'}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Tags:
                </Typography>
                {tags && (
                  <div>
                    {tags.map((tag) => (
                      <Chip
                        key={tag.id}
                        label={tag.name}
                        variant='outlined'
                        color='primary'
                        className={classes.tag}
                      />
                    ))}
                  </div>
                )}
                <Paper variant='outlined' className={classes.description}>
                  <Typography variant='body1' component='div'>
                    <Markdown>{description}</Markdown>
                  </Typography>
                </Paper>
                <RecipeRating />
                <Box
                  sx={{
                    '& > :not(style)': { m: 1 },
                  }}
                >
                  <Link href={`/`}>
                    <Fab
                      variant='extended'
                      color='info'
                      style={{ marginTop: 20 }}
                    >
                      <FastfoodIcon sx={{ mr: 1 }} />
                      Back to Recipes
                    </Fab>
                  </Link>
                </Box>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default RecipeDetails;
