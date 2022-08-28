import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { incremen, decerement, double, increment} from '../redux/Counter'
let Charts = () => {
    const count = useSelector((state) => state.counter.value.number)
    const name = useSelector((state) => state.counter.value.name)

    const dispatch = useDispatch ()
    return (
        <div>
            {count}
            {name}
            
            <button onClick = {() => dispatch(increment())}>+</button>
        </div>
    )
}

export default Charts;