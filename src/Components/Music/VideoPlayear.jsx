
import React, { useRef, useState } from 'react';
import { Box, Button, Center } from '@chakra-ui/react';
import "./mandv.css"
import video from "../Images/video.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Box id='vidplay' >
      <h2 id='vidh'>Tour of our gym!</h2>
      <video id='vid' ref={videoRef} >
        <source src={video} type="video/mp4" />
      </video>
      <Center>
        <Button id='vidbtn' onClick={handlePlayPause} >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
      </Center>
    </Box>
  );
};



export default VideoPlayer;
