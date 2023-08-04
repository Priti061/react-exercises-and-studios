import styles from './Description.module.css';
import React from 'react';
const RecipeAuthor = () => {
let authorLink= "https://pinchofyum.com/";
let authorPhoto= 'https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg';
let authorName = 'Lindsay';
// let recipeTitle = "Chili Crunch Tofu";
// let recipeShortDesc= "Crispy baked tofu tossed with a 2-ingredient sweet, sticky, and spicy chili sauce!";

return (
   <div className = {styles.recipeAuthorBlock}>
      <img 
      src={authorPhoto} 
      alt = {authorName}
      className={styles.imageUpdates} 
      />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>pinchofyum</a> 
      </div>
   </div>

);
};

class RecipeDescription extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <h1>"Chili Crunch Tofu"</h1>
                    <p>"Crispy baked tofu tossed with a 2-ingredient sweet, sticky, and spicy chili sauce!"</p>
                </div>
                <RecipeAuthor/>
            </div>
        );
    }
}
export default RecipeDescription;
