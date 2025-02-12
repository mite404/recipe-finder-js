import { recipes } from "./data/recipes.js";
import { getRecipes } from "./components/recipeResults.js";
import { renderRecipes } from "./components/recipeResults.js";

const searchInput = document.getElementById("search-bar");
const filterDropdown = document.getElementById("filter-dropdown");
const recipeDetails = document.getElementById("recipe-details");

// const { id, name, image, ingredients, instructions, cuisine, difficulty } = recipes

renderRecipes(recipes, getRecipes);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    searchRecipes();
  }
});

function searchRecipes(recipes, searchTerm) {
  const lowerSearchTerm = searchTerm.toLowerCase();

  return recipes.filter((obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];

        if (
          typeof value === "string" &&
          value.toLowerCase().includes(lowerSearchTerm)
        ) {
          return true;
        }
      }
    }
    return false;
  });
}
