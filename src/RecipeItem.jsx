import { useState } from "react";
import "./RecipeItem.css";

function RecipeItem({ recipe, toggleLearnt, removeRecipe }) {
  function changeHandler() {
    toggleLearnt(recipe.id);
  }

  return (
    <>
      <div className="recipe-details">
        <input
          type="checkbox"
          checked={recipe.learnt}
          onChange={changeHandler}
        />
        <p>Title: {recipe.text}</p>
        <p>Requirements: {recipe.requirements}</p>
        <button
          // disabled={!recipe.text}
          id="remove-button"
          onClick={() => removeRecipe(recipe.id)}
        >
          Remove Recipe
        </button>
      </div>
    </>
  );
}

export default RecipeItem;
