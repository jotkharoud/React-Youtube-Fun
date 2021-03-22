import axios from 'axios'

const KEY = 'AIzaSyArm-ZomOVBIMSXO_-lHy1TRmgfsI1g1cI'



export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults : 10,
        key : KEY,
    }

});