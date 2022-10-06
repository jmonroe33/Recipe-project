import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setName("");
    setCuisine("");
    setIngredients("");
    setPhoto("");
    setPreparation("");
    createRecipe({ name, cuisine, ingredients, photo, preparation });
  };

  const nameChangeHandler = ({ target }) => {
    setName(target.value);
  };
  const cuisineChangeHandler = ({ target }) => {
    setCuisine(target.value);
  };
  const ingredientsChangeHandler = ({ target }) => {
    setIngredients(target.value);
  };
  const photoChangeHandler = ({ target }) => {
    setPhoto(target.value);
  };
  const preparationChangeHandler = ({ target }) => {
    setPreparation(target.value);
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // needs two inputs and one img input and a two text area inputs
  // need logic for delete button that checks to see if the button is
  // i need the info for the name, i need info for all the properties that
  // were created in the formData so formdata needs to get passed down
  // remember you need the data for multiple
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={nameChangeHandler}
                  value={name}
                  required
                  placeholder="Name"
                  className="smInputs"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cusine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={cuisineChangeHandler}
                  value={cuisine}
                  required
                  placeholder="Cuisine"
                  className="smInputs"
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={photoChangeHandler}
                  value={photo}
                  required
                  placeholder="Photo"
                  className="smInputs"
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="textarea"
                  name="ingredients"
                  onChange={ingredientsChangeHandler}
                  value={ingredients}
                  placeholder="Ingredients"
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  type="textarea"
                  name="preparation"
                  onChange={preparationChangeHandler}
                  value={preparation}
                  placeholder="Preparation"
                />
              </label>
            </td>
            <td>
              <button type="submit" className="create">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
