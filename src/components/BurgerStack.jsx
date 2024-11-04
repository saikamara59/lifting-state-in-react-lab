
const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
      <div className='w-24.5 h-24.5 items-center p-5 flex flex-col'>
        <h2 className="text-2xl drop-shadow-md text-primary text-center mb-4">Create Sai's Favorite Burger</h2>
        <ul className="list-none m-0 p-2.5 w-full max-h-screen flex flex-col gap-2">
        {stack.map((ingredient,index) => (
          <li className="rounded-md drop-shadow-xl border-solid font-bold flex items-center justify-center #fff7ed curor-pointer transition"
            key={index} 
            style={{ backgroundColor:ingredient.color, padding:'5px',
               margin:'5px',
                cursor:'pointer'}}onClick={() => removeFromBurger(ingredient)}
          > {ingredient.name}
          </li>
        ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;
  