import React from 'react'
import './Markdowninput.css'
const Markdowninput = (props) => {
    return (
        <div className='inputContainer'>
            <textarea value={props.markdownInput} onChange={(ele) => {
                const inputValue = ele.currentTarget.value;
                props.setmarkdownInput(inputValue)
                console.log(inputValue);
            }} ></textarea>
        </div>
    )
}

export default Markdowninput