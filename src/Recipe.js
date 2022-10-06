import React from "react";

function Recipe({ recipe, deleteRecipe, index }){
   
    
    return (
      <tr key={index}>
        <td className="recipe"><p>{(recipe.name)}</p></td>
        <td><p>{(recipe.cuisine)}</p></td>  
        <td><p>{(<img alt={recipe.photo} src={recipe.photo} />)}</p></td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td> 
          <button name="delete" onClick={deleteRecipe} className="delete">Delete</button> 
        </td>
      </tr>
    )
}
export default Recipe