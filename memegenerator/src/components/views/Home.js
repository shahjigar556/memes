import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';


export default function Home() {
    const [memedata,setMemeData]=useState([]);
    console.log(memedata);
    
    //Getting data from API
    const sendGetRequest=async()=>{
      try{
        const resp=await axios.get('https://api.imgflip.com/get_memes')
        console.log(resp.data)
        setMemeData(resp.data)
      }catch(e){
          console.log("Error in Fetching Data")
      }
    }
    useEffect(()=>{
       sendGetRequest();
    },[])
    return (
        <div>
            <h1>DashBoard For memes</h1>
        </div>
    )
}
