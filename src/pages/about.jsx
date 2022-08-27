import React from 'react'
import {useState} from 'react'



let About = () => {
    const [input, setInput] = useState('test')

    let inputHandler = (event)=> setInput(event.target.value)
    return (
        <div>
            this is the About page
            <h1>{input}</h1>

            <input type="text" onChange = {inputHandler} value = {input} />
        </div>
    )
}

export default About;