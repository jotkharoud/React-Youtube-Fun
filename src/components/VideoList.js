import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({videos , onVideoSelect}) =>{
    //props and videos length is coming from app component
   const renderedList =  videos.map( video =>{
        return <VideoItem key={video.id.videoId} onVideoSelect = {onVideoSelect} video = {video} />
    })
    return(

        <div className = "ui relaxed divided list">{renderedList}</div>
    )
}
//removing props by destructing videos as es2015 elememnt

export default VideoList