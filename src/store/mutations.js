export function setSearchedMeals (state, meals) {
    state.searchedMeals = meals || []
}

export function setSearchedMealsByLetter (state, meals) {
    state.searchedMealsByLetter = meals || []
}

export function setSearchedMealsByIngredient (state, meals) {
    state.searchedMealsByIngredient = meals || []
}

export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }