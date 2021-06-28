import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) =>{
    return (
        <form className={classes.form}>
            <Input 
            label='Monto' 
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} 
            />
            <button>+ Agregar</button>
        </form>
    )
}

export default MealItemForm