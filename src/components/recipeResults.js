export function getRecipes(recipes) {
  let recipesHTML = ``;

  recipes.forEach((recipe) => {
    recipesHTML += `

      <div class="recipe-card">
        <img src="${recipe.image}" alt="">
        <h4 class="">${recipe.title}</h4>
        <p><i>${recipe.genre}</i></p>
        <p class="rating">Rating: ${recipe.rating}/5 ✨</p>
        <p class="recipe-instructions">${recipe.instructions}</p>
      </div>`;
  });
  return recipesHTML;
}


export function renderRecipes(recipes, recipeDetails) {
  recipeDetails.innerHTML = getRecipes(recipes);
}
