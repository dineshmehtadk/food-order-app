import { Fragment } from "react/cjs/react.production.min";
import AvailableMeal from "./DummyMeal.jsx";


import MealsSummary from "./MealSummary";

function Meals(props){
    return(
        <Fragment>
            <MealsSummary />
            <AvailableMeal />
        </Fragment>
    )
}

export default Meals;