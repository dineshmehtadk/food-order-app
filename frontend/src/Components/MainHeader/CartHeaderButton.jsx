import classes from "./CartHeaderButton.module.css"
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";

function CartHeaderButton(props){
    const CartCtx = useContext(CartContext);
  
    const NumberCartItem = CartCtx.items.reduce((currentNum,item)=>{
        return currentNum + item.amount
    },0)
    return<button className={classes.button} onClick={props.onShow}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Cart</span>
        <span className={classes.badge}>{NumberCartItem}</span>
        </button>
}

export default CartHeaderButton;