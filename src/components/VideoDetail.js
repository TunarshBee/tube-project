import React from 'react'
import './VideoDetail.css'

export default function VideoDetail({video}) {
    
    if(!video){
        return <div>Loading....</div>
    }

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div className='detailDis'>
            <div className='ui embed'>
                <iframe title="vidoe title" src={videoSrc} />
            </div>
            <div className='h4 ui segment'>
                <h4 className=' ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}
