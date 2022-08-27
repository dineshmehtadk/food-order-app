
import classes from "./Header.module.css"
import MealImage from "../../assests/meal.jpg"
import CartHeaderButton from "./CartHeaderButton";

import { Fragment } from "react";

function Header(props){
    return<Fragment> 
        <header className={classes.header}>
            <h1>Food App</h1>
            <CartHeaderButton onShow={props.onShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealImage} alt="main-header-img"/>
        </div>
        </Fragment>
}

export default Header;