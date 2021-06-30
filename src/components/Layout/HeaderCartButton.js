import { useContext } from 'react'

import CartIcon from '../Card/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amunt
    }, 0)

    return <button className={classes.button} onClick={props.onClick} >
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Tu Carrito</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton