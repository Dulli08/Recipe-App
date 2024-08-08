import { useState } from "react";
import RecipeItem from "./RecipeItem.jsx";
import "./RecipeList.css";

function RecipeList() {
  const [recipes, setRecipes] = useState([
    {
      text: "Recipe of tea",
      requirements:
        "A packet of indian tea(Lipton is recommended), Sugar, Milk, Tea stainer and a Pot.",
      learnt: true,
      id: 1,
    },
  ]);

  const [text, setText] = useState("");
  const [requirements, setRequirements] = useState("");

  console.log(recipes);

  function toggleLearnt(id) {
    setRecipes(
      recipes.map((recipe) => {
        return recipe.id === id
          ? { ...recipe, learnt: !recipe.learnt }
          : recipe;
      })
    );
  }

  function removeRecipe(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  function addRecipe({ text, requirements }) {
    const newRecipes = {
      text: text,
      requirements: requirements,
      learnt: false,
      id: Date.now(),
    };
    setRecipes([...recipes, newRecipes]);
    setText("");
    setRequirements("");
  }

  return (
    <>
      <div className="recipeItem">
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            toggleLearnt={toggleLearnt}
            addRecipe={addRecipe}
            removeRecipe={removeRecipe}
          />
        ))}
      </div>
      <div className="addFunction">
        <div className="text-input">
          <input
            id="title-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Title"
          />
          <input
            id="requirements-input"
            type="text"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="Requirements"
          />
        </div>
        <button
          id="add-button"
          disabled={!text}
          onClick={() => addRecipe({ text, requirements })}
        >
          Add Recipe
        </button>
      </div>
    </>
  );
}

export default RecipeList;
