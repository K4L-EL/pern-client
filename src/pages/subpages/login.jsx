import React, {useState, useEffect} from 'react';
const  axios = require('axios').default




let Login = () => {


const getData = async()=> {

let res = await axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get');
    setData([...res.data]);
}
const [data, setData] = useState([])
useEffect(() => getData,[])

    return(
        <div>
            {console.log(data)}
            {data.map(e=><p key= {e.id}>{e.first_name}</p>)}
        Login page is here
        </div>
    )
}
export default Login;