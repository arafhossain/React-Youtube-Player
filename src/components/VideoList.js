import React from 'react';
import VideoItem from './VideoItem'

let VideoList = props => {
  let renderedList = props.videos.map((video) => {
    return <VideoItem video={video}/>;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;