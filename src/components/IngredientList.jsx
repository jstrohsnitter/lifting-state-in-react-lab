// src/components/IngredientList.jsx
//import { availableIngredients } from "../App";
import { useState } from 'react';

const IngredientList = (props) => {
    //console.log(props.ingredients)
    // const handleAddIngredient = (event) => {
    //     props.ingredients()
    // }
const [chosenIngredients, setChosenIngredients] = useState([])

const addIngredient = (event) => {
    setChosenIngredients([...chosenIngredients, event.target.value])
    //setChosenIngredients(updatedIngredients)
    //console.log(chosenIngredients)
    props.addToBurger(chosenIngredients)
}



   


    // const handleAddIngredient = (event) => {
    //     console.log(handleAddIngredient)
    // }

    return <ul>
        {props.ingredients.map((ingredient, index) => { //4.5) now we can use *props.todos* instead of tempTodos
          return <li key={index}>{ingredient.name}<button onClick={addIngredient} value={ingredient}>+</button></li>;
        })}
    </ul>;
  };
  
  export default IngredientList;
  