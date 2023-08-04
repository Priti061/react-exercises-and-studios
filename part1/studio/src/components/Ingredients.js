import styles from './Ingredients.module.css';
const RecipeIngredients = () => {
    let ingredients = ["extra firm tofu","cornstarch","soysauce","oliveoil","salt","yum yum sauce", "chili crisp honey"];
    return (
        <div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li>{ingredients[0]}</li>
           <li>{ingredients[1]}</li>
           <li>{ingredients[2]}</li>
           <li>{ingredients[3]}</li>
           <li>{ingredients[4]}</li>
           <li>{ingredients[5]}</li>
           <li>{ingredients[6]}</li>
        </ul>
     </div>
    )
}

export default RecipeIngredients;