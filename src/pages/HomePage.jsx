import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import data from "../data/recipe.js";
import { Box, SimpleGrid } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
import SideDrawer from "../components/SideDrawer.jsx";

const HomePage = () => {
  const data = useLoaderData();
  const [recipes, setRecipes] = useState(data);

  const handleSearch = async (value) => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=a7a6ca05&app_key=7af5257ec06ad1cde0dc1f2ef21634bf`;
    const result = await axios.get(url);
    const recipes = result.data.hits;
    setRecipes(recipes);
  };

  return (
    <Box bg="orange.50">
      {/* //building a nav bar for the project */}
      <SideDrawer handleSearch={handleSearch} />
      <Box mx="auto" maxW={{ sm: "480", md: "750", lg: "1200px" }}>
        <SimpleGrid minChildWidth="340px">
          {recipes.map((r, i) => (
            <RecipeCard key={i} hits={r} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export async function loadRecipes() {
  const url =
    "https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=a7a6ca05&app_key=7af5257ec06ad1cde0dc1f2ef21634bf";
  const result = await axios.get(url);
  const recipes = result.data.hits;
  return recipes;
}

export default HomePage;
