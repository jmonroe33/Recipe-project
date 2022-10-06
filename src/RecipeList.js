import React from "react";
import Recipe from "./Recipe";
function RecipeList({recipes,deleteRecipe}) {
   
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  // i need to have data that is inside of recipe data displayed.
  // it needs to update each time the data that the user enters is submitted
  // i need the values of the recipe data to be displayed 
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           {recipes.map((recipe,index)=>(
            <Recipe 
              index = {index} 
              key={index} 
              recipe={recipe} 
              deleteRecipe={()=> deleteRecipe(index)}/>
           ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
