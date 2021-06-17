import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = props =>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Cruer's Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Una Mesa Llena de Comida Deliciosa" />
        </div>
    </React.Fragment>
}

export default Header