import Card from "../UI/Card/Card";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Pizza',
      description: 'Finest fish and veggies',
      price: 399,
    },
    {
      id: 'm2',
      name: 'Sandwich',
      description: 'A german specialty!',
      price: 149,
    },
    {
      id: 'm3',
      name: 'Ham Burger',
      description: 'American, raw, meaty',
      price: 199,
    },
    {
      id: 'm4',
      name: 'Tandoori Momos',
      description: 'Healthy...and green...',
      price: 299,
    },    {
      id: 'm5',
      name: 'Dosa',
      description: 'South Indian Tadka...',
      price: 139,
    },
  ];
function AvailableMeal(){
    const DummyMeal = DUMMY_MEALS.map((meal)=><MealItem 
  key ={meal.id}
  id = {meal.id}
  name={meal.name}
  description={meal.description}
  price = {meal.price}
  
  />)
  return(<section>
      <Card>
        <ul>
            {DummyMeal}
        </ul>
    </Card>
</section>
)

}

export default AvailableMeal;

