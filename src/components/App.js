import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import Youtube from '../apis/Youtube'
import VideoDetail from "./VideoDetail";

export class App extends Component {

    state ={ videos :[], selectedVideo: null }

    componentDidMount(){
      this.onTermSubmit('coding')
    }

  onTermSubmit = async term => {
   const resp = await Youtube.get('/search', {params:{
        q:term
    } })
    this.setState({
      videos: resp.data.items,
      selectedVideo:  resp.data.items[0]
    })
  };

  onVideoSelect= videos=>{
    this.setState({selectedVideo: videos})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
