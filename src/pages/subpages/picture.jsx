import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

let Picture = () => {
    const count = useSelector((state) => state.counter.value.number)
    return(
        <div>
            {count}

        </div>
    )
}

export default Picture;