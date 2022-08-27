import { useState } from "react";
import Header from "./Components/MainHeader/Header";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [modalPopup, setmodalPopUp] = useState(false);

  function showModalCart(){
    setmodalPopUp(true)

  }
  function closeModalCart(){
    setmodalPopUp(false)

  }

  return (<CartProvider>
      {modalPopup && <Cart onClose={closeModalCart}/>}
      <Header onShow={showModalCart}/>
      <menu><Meals/></menu>
      </CartProvider>
  );
}

export default App;
