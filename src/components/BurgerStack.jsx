
const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <div>
        <h2>Design Sai's Favorite Burger</h2>
        <ul>
        {stack.map((ingredient,index) => (
          <li
            key={index} 
            style={{ backgroundColor:ingredient.color, padding:'5px', margin:'5px', cursor:'pointer'}}onClick={() => removeFromBurger(ingredient)}
          > {ingredient.name}
          </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;
  