import React from 'react'


const VideoDetail = ({video}) =>{  
       //that video is equivalent to props.video like (props.video) is same as ({video})
    if (!video){
        return<div>Loading...</div>
    }
      const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}` //i am getting everything from network request when  i search anything
   return(
        <div>
            <div className = "ui embed">
                <iframe title= "video player"src= {videoSrc} />
            </div>
            <div className = "ui segment">
            <h4 className = "ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
            
            </div>

    )
}

export default VideoDetail