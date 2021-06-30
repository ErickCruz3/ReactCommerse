import { useRef, useState } from 'react'

import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) =>{
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ){
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
            label='Monto' 
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} 
            />
            <button>+ Agregar</button>
            {!amountIsValid && <p>Porfavor inserte una cantidad valida(1-5)</p>}
        </form>
    )
}

export default MealItemForm