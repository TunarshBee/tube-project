import axios from 'axios'

const KEY= "AIzaSyCaEeeVfyb8juD6oi-a5J3eQrc87ah_3cs"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        
    }
})