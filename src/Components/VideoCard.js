import React from 'react'

const VideoCard = ({item}) => {
   const{snippet,statistics}=item
   const{channelTitle,title,thumbnails}=snippet
  
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg"
      alt="thumbnail"
      src={thumbnails.medium.url}>
    
      </img>

      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        
        
      </ul>
      
    </div>
  )
}

export default VideoCard
