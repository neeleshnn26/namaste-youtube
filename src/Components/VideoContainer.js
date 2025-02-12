import React, { useState,useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVideos]=useState([])

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
    try{
      const data = await fetch(YOUTUBE_VIDEOS_API)
    const json= await data.json()
    // console.log(json)
    setVideos(json.items)
    }
    catch(error){
      console.log(error);
    }
    
  }
  return (
    <div className="flex justify-between flex-wrap">
      {
        videos?.map((item)=>
          <Link to={"/watch?v="+ item.id} key={item.id}>
          <VideoCard 
           item={item} />
          </Link>
          
        )
      }
    </div>
  )
}

export default VideoContainer
