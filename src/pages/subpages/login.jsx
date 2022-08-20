import React, {useState, useEffect} from 'react';
const  axios = require('axios').default




let Login = () => {
    const [data, setData] = useState([{}])

let getData = () => {
    axios.get('http://nodeserver-env-1.eba-qqjyacfm.eu-west-2.elasticbeanstalk.com/get')
    .then((res) => setData(res.data))}
    
    useEffect(() => getData,[data])



    return(
        <div>
            {console.log(data)}
            {data.map(e=><p key= {e.id}>{e.id}+{e.first_name}</p>)}
        Login page is here
        </div>
    )
}
export default Login;