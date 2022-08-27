import React, {useState, useEffect} from 'react';
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
            {toggle?data.map(e=><p key= {e.id}>{e.id}+{e.first_name}</p>):null}
        Login page is here
        </div>
    )
}
export default Login;