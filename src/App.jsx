import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';
import { useState } from 'react';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  

  const [stack,setStack] = useState([])

const addToBurger = (ingredient) => {
  setStack([...stack,ingredient])
}

const removeFromBurger = (index) => {
  setStack(stack.filter((_, a)=> a !== index))
};

  
  return (
    <main>
      <h1> My Burger Stacker</h1>
      <section>
        <div className="column">
    <IngredientList ingredients ={availableIngredients} addToBurger={addToBurger}/>
    </div>
    <div className="column">
    <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
    </div>
      </section>
    </main>
  );
};

export default App;
