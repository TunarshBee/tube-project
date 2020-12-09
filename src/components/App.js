import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList'
import Youtube from '../apis/Youtube'

export class App extends Component {

    state ={ videos :[] }

  onTermSubmit = async term => {
   const resp = await Youtube.get('/search', {params:{
        q:term
    } })
    this.setState({videos: resp.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
