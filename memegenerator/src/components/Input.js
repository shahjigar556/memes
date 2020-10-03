import React from 'react'
import TextField from '@material-ui/core/TextField';
export default function Input({text_boxes,handleChange}) {
    const inputFields=[];
    const inputStyle={
        width:'30%',
        margin:'20px'
    }
    for(let i=1;i<=text_boxes;i++){
        inputFields.push(
            <TextField style={inputStyle} id={i} onChange={(e)=>handleChange(e,i)} label="Enter Text" variant="outlined" />          
        )
    }

    return (
        <div>
            {inputFields.map(input=>{
                return(
                   <div>
                       {input}
                   </div>
                )
            })}
        </div>
    )
}
