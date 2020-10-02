import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import MemesDashboard from '../MemesDashboard';

export default function Home() {
    const [memedata,setMemeData]=useState([]);
    console.log(memedata);
    
    //Getting data from API
    const sendGetRequest=async()=>{
      try{
        const resp=await axios.get('https://api.imgflip.com/get_memes')
        setMemeData(resp.data.data.memes)
      }catch(e){
          console.log("Error in Fetching Data")
      }
    }
    useEffect(()=>{
       sendGetRequest();
    },[])
    
    const headerStyle={
      textAlign:'center',
      color:'red'
    }
    return (
        <div>
            <h1 style={headerStyle}>Meme Dashboard</h1>
            <MemesDashboard memes={memedata}/>  
        </div>
    )
}
