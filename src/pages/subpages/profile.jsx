import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeName, changeAge, changeBalance} from '../../redux/userSlice'
let Profile = () => {
    const name = useSelector((state)=> state.user.fname)
    const age = useSelector((state) => state.user.age)
    const balance = useSelector((state) => state.user.balance)
    const dispatch = useDispatch()
        return(
        <div>
            {`this is ${name}'s profiles he is ${age} years old and his current balance is ${balance} $`}
            <button onClick={()=>dispatch(changeBalance())}>Change balance</button>

        </div>
    )
}

export default Profile;