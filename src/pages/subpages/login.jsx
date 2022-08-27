import React, {useState, useEffect} from 'react';
import Note from '../card'
const  axios = require('axios').default




let Login = () => {
    const [data, setData] = useState([{}])
    const [toggle, setToggle] = useState(false)

let getData = () => {
    axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get')
    .then((res) => setData(res.data))
    setToggle(!toggle)

}
    
    
    // useEffect(() => getData,[data])



    return(
        <div>
            <button onClick={getData}>GET DATA</button>
            {console.log(data)}
            {toggle?data.map(e=><Note key= {e.id} fName= {e.first_name} lName = {e.last_name} gender={e.gender} balance = {e.balance} />):null}
        Login page is here
        </div>
    )
}
export default Login;