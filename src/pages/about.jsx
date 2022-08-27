import React from 'react'
import {useState} from 'react'



let About = () => {
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('waiting....')

    let inputHandler = (event)=> {
        
        setInput(event.target.value)
        
        }

    let submitHandler = (event) => {
        setInput2(input)
        event.preventDefault()
    }

    return (
        <div>
            this is the About page
            
            <h2>{input2}</h2>
            <form>
            <input type="text" onChange = {inputHandler} value = {input} />
            <br/>
            <input type="password"  />
            <br/>


            <button onClick = {submitHandler} >Submit</button>
            </form>

        </div>
    )
}

export default About;