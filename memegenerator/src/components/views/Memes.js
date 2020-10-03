import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Input from '../Input';
const boxes=[];

export default function Memes(props) {
   const [meme,setMeme]=useState({});
   const [receivedMeme,setReceivedMeme]=useState();
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
   
   var bodyformData=new FormData();
   bodyformData.append('template_id',id);
   bodyformData.append('username','Jigar123');
   bodyformData.append('password','jigar123')
   bodyformData.append('text0',' ')
   bodyformData.append('text1',' ')
   bodyformData.append('boxes',[]);
   console.log(bodyformData)
   const handleChange=(e,num)=>{
       console.log(`Change Event is Triggered with ${num} and ${e.target.value}`)

       if(text_boxes>=3)
       {
          console.log("More than 2 text-boxes")
          console.log(`change event ocuured by ${num} and ${e.target.value}`)
          bodyformData.set(`boxes[${num-1}][text]`,e.target.value)
       }
       else{
        if(num==1){
            bodyformData.set('text0',e.target.value);    
            
        }
        else if(num==2){
            bodyformData.set('text1',e.target.value);
        }
         
       }
   }
 
   const sendPostRequest=async()=>{
      
        axios({
            method: 'post',
            url: 'https://api.imgflip.com/caption_image',
            data: bodyformData,
            headers: {'Content-Type': 'multipart/form-data' }
            })
            .then(function (response) {
                //handle success
                console.log(response.data.data);
                setMeme(response.data.data)
                
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });   
      
       
   }
   const handleSubmit=(e)=>{
        e.preventDefault();
        sendPostRequest();
   }
    return (
       <div>
           <center>
           <img style={imgStyle} src={meme.url} height="400px" width="400px" alt={meme.name} />
           <h2>{meme.name}</h2>
           </center>
           <form onSubmit={handleSubmit}>
           <Input text_boxes={text_boxes} handleChange={handleChange}/>
           <button type="submit">Generate Meme</button>
           </form>
       </div>
    )
}