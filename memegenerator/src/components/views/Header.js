import React from 'react'

import Grid from '@material-ui/core/Grid';
export default function Header() {
const divStyle={
    backgroundColor:'yellow',
    height:'150px',
   
}
const headingStyle={
    fontWeight:'bold',
    color:'green',
    textAlign:'center'
}
    return (
        <div style={divStyle}>
             <h1 style={headingStyle}>Meme Generator</h1>
             <p style={{
                 color:'red',
                 textAlign:'center'
             }}>Make a meme make a laugh</p>
        </div>
    )
}
