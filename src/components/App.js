import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import Youtube from '../apis/Youtube'

export class App extends Component {

    state ={ videos :[], selectedVideos: null }

  onTermSubmit = async term => {
   const resp = await Youtube.get('/search', {params:{
        q:term
    } })
    this.setState({videos: resp.data.items})
  };

  onVideoSelect(videos){
    console.log('From the App', videos )
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
