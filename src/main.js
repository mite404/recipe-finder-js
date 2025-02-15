import { recipesArray } from "./data/recipes.js";
import { updateRecipeListDisplay } from "./components/recipeResults.js";

const searchForm = document.getElementById("search-form")
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("submit");
const recipeResultsDiv = document.getElementById("recipe-results");
const favRecipesDiv = document.getElementById("favorite-recipes")
const recipeDetails = document.getElementById("recipe-details");

// const { id, name, image, ingredients, instructions, cuisine, difficulty, isFavorite } = recipes


// Search Functionality
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = searchBar.value.toLowerCase();
  console.log("Search submitted with: ", searchTerm);

  const filteredResults = searchRecipes(recipesArray, searchTerm);

  updateRecipeListDisplay(filteredResults, recipeResultsDiv);  // Update search results

  searchBar.value = ""; // Clear 'searchBar' after 'searchBtn' is pressed

  // Filter FAVORITES based on the CURRENT search term:
  const filteredFavRecipes = filteredResults.filter(recipe => recipe.isFavorite);

  updateRecipeListDisplay(filteredFavRecipes, favRecipesDiv);  // Init render of favs

})


function searchRecipes(recipesArray, searchTerm) {
  // Search all recipe data in the array.

  if (!searchTerm) return [];  // Return empty array if search term is empty

  console.log('Searching: ', searchTerm);

  return recipesArray.filter((recipeObject) => {
    for (const key in recipeObject) {
      if (recipeObject.hasOwnProperty(key) && typeof recipeObject[key] === "string") {
        const value = recipeObject[key].toLowerCase();

        if (value.includes(searchTerm)) {
          console.log('Found: ', searchTerm, "in", key, ":", value);
          return true;
        }
      }
    }
    return false;
  });
}


// Like button functionality
document.addEventListener('click', function(e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like)
  }
});

function handleLikeClick(recipeId) {
  const targetRecipeObj = recipesArray.find(recipe => recipe.id === recipeId);

  if (targetRecipeObj) {
    targetRecipeObj.isLiked = !targetRecipeObj.isLiked
    updateRecipeListDisplay(recipesArray, recipeResultsDiv);
  }
}

const initialFavRecipes = recipesArray.filter(recipe => recipe.isFavorite);

updateRecipeListDisplay(recipesArray, recipeResultsDiv);  // Init render
updateRecipeListDisplay(initialFavRecipes, favRecipesDiv); // Init render of favs