import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  // will need to make a initial state object that has properties
  const [recipes, setRecipes] = useState(RecipeData);
// handles the change of state using the setRecipes funciton attached
// descrutcture to the target property of the object event
 const createRecipe = (newRecipe) =>{
  setRecipes([
    ...recipes,
    newRecipe
  ])
 }

 const deleteRecipe =(indexToDelete)=>{
  setRecipes((currentRecipe)=> currentRecipe.filter((recipe,index)=> index !== indexToDelete)
 )}

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
      recipes={recipes} deleteRecipe={deleteRecipe}
      />
      <RecipeCreate 
      createRecipe={createRecipe}
      />

    </div>
  );
}

export default App;
