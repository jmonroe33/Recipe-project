import React, { useState } from "react";

function RecipeCreate({ formData,submitHandler,onChangeHandler }) {
  // i need the form state 
  // needs the submit handler 
  // needs a change Handler

  return (
    <form name="create"onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={onChangeHandler}
                  value={formData.name}
                  placeholder="Name"
                  className="smInputs"
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="cusine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={onChangeHandler}
                  value={formData.cuisine}
                  placeholder="Cuisine"
                  className="smInputs"
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={onChangeHandler}
                  value={formData.photo}
                  placeholder="Photo"
                  className="smInputs"
                  required
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="textarea"
                  name="ingredients"
                  onChange={onChangeHandler}
                  value={formData.ingredients}
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
                  onChange={onChangeHandler}
                  value={formData.preparation}
                  placeholder="Preparation"
                  required
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
