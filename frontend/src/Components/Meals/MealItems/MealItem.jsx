import classes from "./MealItems.module.css";

import MealForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../../../Store/Cart-Context";

function MealItem(props){
    const CartCtx = useContext(CartContext);
    const price= `$${props.price.toFixed(2)}`;
  
    const AddCartItemHandler= amount =>{
        CartCtx.addItem({
            id: props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
        

    }
   
    return(<li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                {props.description}
                </div>
                <div className={classes.price}>
                {price}
                </div>
            </div>
            <div>
                <MealForm id={props.id} onAddtoCart={AddCartItemHandler}/>
            </div>
        </li>
    )
}

export default MealItem;