import classes from "./MealForm.module.css"
import Input from "../../UI/Input.js";
import { useRef } from "react";

function MealForm(props){
    const amountInputRef = useRef();
    const submitHandler= event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enteredAmount;
       
        // if(enteredAmount.trim().length===0 || enteredAmountNumber >1 || enteredAmountNumber <5){
        //     return;
        // };
      
        props.onAddtoCart(enteredAmountNumber);
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
           
            <Input 
                ref={amountInputRef}
                label="Amount"
                input={{
                    id:'amount__'  + props.id,
                    type:'number',
                    max:'5',
                    min:'1',
                    step:'1',
                    defaultValue:'1',
                }}
            >{props.children}</Input>
             <button>+ Add</button>
        </form>
    )
}

export default MealForm;