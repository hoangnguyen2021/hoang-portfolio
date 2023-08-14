import React from "react";
import ReactPlayer from "react-player";

type VideoPlayerProps = {
    path: string,
    width: number,
    height: number
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({path, width, height}) => {
    return (
        <ReactPlayer url={path} controls={true} width={width} height={height}/>
    );
};

export default VideoPlayer;