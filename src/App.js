import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData,setFormData]= useState({...initialState})
  // will need to make a initial state object that has properties
  const [recipes, setRecipes] = useState(RecipeData);
// handles the change of state using the setRecipes funciton attached
// descrutcture to the target property of the object event
 const onChangeHandler = ({target})=>{
   setFormData({
    ...formData,
    [target.name]: target.value,
   })
 } 
 const submitHandler = (event)=> {
  event.preventDefault()
   setRecipes([
    ...recipes,
    formData,
   ])
   setFormData({...initialState})
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
      formData={formData}
      submitHandler={submitHandler}
      onChangeHandler={onChangeHandler}
      />

    </div>
  );
}

export default App;
