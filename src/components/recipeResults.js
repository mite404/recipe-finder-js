// View logic

export function renderRecipeCards(recipesArray) {
  // Renders recipe cards

  let recipeResultsHTML = ''; // Clear previous results

  if (recipesArray.length === 0) {
    return "<p>No recipes found.</p>";
  }

  recipesArray.forEach((recipe) => {
    let likeIconClass = recipe.isLiked ? 'liked' : '';

    if (recipe.isLiked) {
      likeIconClass = 'liked'
    }

    recipeResultsHTML += `
      <div class="recipe-card">
        <h4 class="">${recipe.name}</h4>
        <p><i>${recipe.cuisine}</i></p>
        <p class="rating">Difficulty: ${recipe.difficulty}/3 ✨</p>
        <p class="recipe-instructions">${recipe.instructions}</p>
        <i class="fa-solid fa-heart ${likeIconClass}" data-like="${recipe.id}"></i>
      </div>`;
  })

  console.log("Rendered recipeResultsHTML")
  return recipeResultsHTML;
}


export function updateRecipeListDisplay(recipesArray, targetDiv) {
  // Check if targetDiv is valid before updating

  if (targetDiv) {
    targetDiv.innerHTML = renderRecipeCards(recipesArray);
  }
}
