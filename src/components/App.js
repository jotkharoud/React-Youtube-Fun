import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from '../components/VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component{
    state = { videos : [] , selectedVideo : null }
    //videos default value will always we an empty array as null declaring it will not be able to access the property of null

 componentDidMount () {
     this.onTermSubmit('Punjabi songs')
 }

    onTermSubmit = async term =>{
   const response =  await youtube.get('/search', {
         params:{
             q :term
         }
     })
     
     this.setState({
         videos: response.data.items ,
         selectedVideo : response.data.items[0] //selected video shows the data on left side with updated video
        })
    }
    //only care about data.items as this is an array which i want to show on screen
     onVideoSelect = video =>{
       this.setState({ selectedVideo : video})
     }
    render(){
        return(
            <div className = "ui container"> 
            <SearchBar onFormSubmit = {this.onTermSubmit} />
            <div className = "ui grid">
                <div className = "ui row">
                 <div className = "eleven wide column">
            <VideoDetail video = {this.state.selectedVideo} />
            </div>
            <div className = "five wide column">
             <VideoList
              onVideoSelect = {this.onVideoSelect} videos = { this.state.videos} /> 
              </div>
            </div>
            </div>
            </div>
        )
    }    //fetching a videos from state object
}

export default App

/* when we pass down a item we use props and when children wants to communicate with parent component then we use callbacks */