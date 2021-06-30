import React, {useState} from "react";

import Header from './src/components/Layout/Header'
import Meals from "./src/components/Meals/Meals"
import Cart from "./src/components/Card/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState()

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <React.Fragment>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
