import React from 'react'
import VidesItem from './VidesItem'
const VideoList=({videos})=> {

    const renderedList = videos.map((video)=>{
        return(
            <VidesItem video={video} />
        )
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}
export default VideoList;