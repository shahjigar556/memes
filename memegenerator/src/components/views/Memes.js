
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
export default function Memes(props) {
   const [meme,setMeme]=useState({});
    const id=props.match.params.id;
    const text_boxes=props.match.params.text_boxes;
    const sendGetRequest=async()=>{
       try{
          const resp=await axios.get('https://api.imgflip.com/get_memes')
          const allMemes=resp.data.data.memes;
          const target=allMemes.filter(smeme=>smeme.id===id);

          setMeme(target[0])
       }catch(err){
           console.log('an error occured');
       }
   }
   useEffect(()=>{
      sendGetRequest()
   },[])
   console.log(meme)
   const imgStyle={
       margin:'20px'
   }
    return (
       <div>
           <center>
           <img style={imgStyle} src={meme.url} height="400px" width="400px" alt={meme.name} />
           <h2>{meme.name}</h2>
           </center>
       </div>
    )
}
