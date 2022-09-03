import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { incremen, decerement, double, increment} from '../redux/counterSlice'
import {setProduct} from '../redux/shopSlice'
let Charts = () => {
    const count = useSelector((state) => state.counter.value.number)
    const name = useSelector((state) => state.counter.value.name)
    const shop = useSelector((state) => state.shop.product)

    const dispatch = useDispatch ()
    return (
        <div>
            {shop}
            <br/>
            {count}
            <br/>

            {name}
            <br/>

            
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = { () => dispatch(setProduct())}>Xbox</button>
        </div>
    )
}

export default Charts;