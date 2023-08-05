import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
   <div>
   <h3 className={classes.choresHeading}>Today's Chores</h3>
   <p><ol className={classes.choresText}>
      <li>Buy groceries</li>
      <li>Take kids to library</li>
      <li>Cook Food</li>
      </ol>
      </p>;
   </div>
   )
}