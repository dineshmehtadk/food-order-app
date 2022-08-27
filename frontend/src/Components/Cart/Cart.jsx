import Modal from "../UI/Modal";
import classes from "./Cart.module.css"
import CartContext from "../../Store/Cart-Context";
import { useContext} from "react";
import CartItem from "./CartItem.js"


function Cart(props){
    const CartCtx = useContext(CartContext);
    const totalAmount = `$${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems = CartCtx.items.length > 0;

    const CartAddItemHandler =(item) =>{
        CartCtx.addItem({...item, amount:1})
    }
    const CartRemoveItemHandler = (id) => {
        CartCtx.removeItem(id)
    }
    
    const Dummy_items= <ul className={classes['cart-items']}>{CartCtx.items.map((item)=> <CartItem 
     key = {item.id}
     name = {item.name}
     amount = {item.amount}
     price = {item.price}
     onAdd = {CartAddItemHandler.bind(null,item)}
     onRemove = {CartRemoveItemHandler.bind(null,item.id)}
    />)}</ul>
    return<Modal onClose={props.onClose}>
        
        {Dummy_items}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Cancel</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
     
    </Modal>
}


export default Cart;