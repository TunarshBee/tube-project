import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import Youtube from '../apis/Youtube'
import VideoDetail from "./VideoDetail";

export class App extends Component {

    state ={ videos :[], selectedVideo: null }

  onTermSubmit = async term => {
   const resp = await Youtube.get('/search', {params:{
        q:term
    } })
    this.setState({videos: resp.data.items})
  };

  onVideoSelect= videos=>{
    this.setState({selectedVideo: videos})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
