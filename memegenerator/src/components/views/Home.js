import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import MemesDashboard from '../MemesDashboard';
import Pagination from '../Pagination';
export default function Home() {
    const [memedata,setMemeData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [postPerPage,setPostPerPage]=useState(10)
    
    //Getting data from API
    const sendGetRequest=async()=>{
      try{
        setIsLoading(true);
        const resp=await axios.get('https://api.imgflip.com/get_memes')
        setMemeData(resp.data.data.memes)
        setIsLoading(false);
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
    const handlePaginate=(number)=>{
      setCurrentPage(number)
    }
   let indexOfLastMeme=currentPage*postPerPage;
    let indexOfFirstMeme=indexOfLastMeme-postPerPage;
    let currentMemes=memedata.slice(indexOfFirstMeme,indexOfLastMeme);
    //console.log(currentMemes)
    //console.log(`${indexOfFirstMeme} ${indexOfLastMeme}`);
    return (
        <div>
            <h1 style={headerStyle}>Meme Dashboard</h1>
            <MemesDashboard memes={currentMemes} loading={isLoading}/>  
            <center>
            <Pagination postPerPage={postPerPage} totalPost={memedata.length} handlePaginate={handlePaginate} />
            </center>
        </div>
    )
}
