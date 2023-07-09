// // import React, { useState } from 'react';

// // import song from "../Images/song.mp3"
// // const Music = () => {
// //   const [currentSongIndex, setCurrentSongIndex] = useState(0);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const songs = [
// //     {
// //       title: 'Song 1',
// //       file: 'song'
// //     }
  
// //   ];

// //   const audioRef = React.createRef();

// //   const playSong = () => {
// //     audioRef.current.play();
// //     setIsPlaying(true);
// //   };

// //   const pauseSong = () => {
// //     audioRef.current.pause();
// //     setIsPlaying(false);
// //   };

// //   const playNextSong = () => {
// //     const nextIndex = (currentSongIndex + 1) % songs.length;
// //     setCurrentSongIndex(nextIndex);
// //     audioRef.current.src = songs[nextIndex].file;
// //     playSong();
// //   };

// //   const playPreviousSong = () => {
// //     const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
// //     setCurrentSongIndex(previousIndex);
// //     audioRef.current.src = songs[previousIndex].file;
// //     playSong();
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <button onClick={playPreviousSong}>Previous</button>
// //         {isPlaying ? (
// //           <button onClick={pauseSong}>Pause</button>
// //         ) : (
// //           <button onClick={playSong}>Play</button>
// //         )}
// //         <button onClick={playNextSong}>Next</button>
// //       </div>
// //       <div>
// //         <p>Current Song: </p>
// //       </div>
// //       <audio ref={audioRef} src={song} />
// //     </div>
// //   );
// // };

// // export default Music;
// import React, { useState } from 'react';

// import song from "../Images/song.mp3";

// const Music = () => {
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const songs = [
//     {
//       title: 'Song 1',
//       file: song
//     }
//   ];

//   const audioRef = React.createRef();

//   const playSong = () => {
//     audioRef.current.play();
//     setIsPlaying(true);
//   };

//   const pauseSong = () => {
//     audioRef.current.pause();
//     setIsPlaying(false);
//   };

//   const playNextSong = () => {
//     const nextIndex = (currentSongIndex + 1) % songs.length;
//     setCurrentSongIndex(nextIndex);
//     audioRef.current.src = songs[nextIndex].file;
//     playSong();
//   };

//   const playPreviousSong = () => {
//     const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//     setCurrentSongIndex(previousIndex);
//     audioRef.current.src = songs[previousIndex].file;
//     playSong();
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={playPreviousSong}>Previous</button>
//         {isPlaying ? (
//           <button style={styles.button} onClick={pauseSong}>Pause</button>
//         ) : (
//           <button style={styles.button} onClick={playSong}>Play</button>
//         )}
//         <button style={styles.button} onClick={playNextSong}>Next</button>
//       </div>
//       <div style={styles.songInfo}>
//         <p style={styles.songTitle}>Current Song: {songs[currentSongIndex].title}</p>
//       </div>
//       <audio ref={audioRef} src={song} />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     backgroundColor: '#f2f2f2',
//     padding: '20px',
//     borderRadius: '5px',
//     textAlign: 'center'
//   },
//   buttonContainer: {
//     marginBottom: '20px'
//   },
//   button: {
//     marginRight: '10px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#2196f3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   },
//   songInfo: {
//     marginBottom: '20px'
//   },
//   songTitle: {
//     fontWeight: 'bold',
//     fontSize: '18px'
//   }
// };

// export default Music;

import React, { useState } from 'react';
import { Box, Button, Center, Text } from '@chakra-ui/react';

import song from "../Images/song.mpeg";
import image from "../Images/image.gif"
import "./mandv.css"

const Music = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  //commit
  //commit
  //commit 
  //commit
  //commit
  //commit
  //commit
  //commit 

  const songs = [
    {
      title: 'Song 1',
      file: song
    }
  ];

  const audioRef = React.createRef();

  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    audioRef.current.src = songs[nextIndex].file;
    playSong();
  };

  const playPreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    audioRef.current.src = songs[previousIndex].file;
    playSong();
  };

  return (
    <Box className="container">
      <Box className="music-player">
        <nav>
          <div className="circle" />
          <div className="circle" />
        </nav>
        <Box className="music-player">
  {/* ... */}
  <img src={image} alt="Song" className="song-img"  />
 
  {/* ... */}
</Box>
<h1 style={{color:"white"}} >Exciting new features coming soon! Stay tuned!</h1>

        {/* <img src={image} alt="Song" className="song-img" /> */}
        <Text as="h1" fontSize="20px" fontWeight="600" color="white" marginTop="20px">
          Current Song: {songs[currentSongIndex].title}
        </Text>
        <Text as="p" fontSize="14px" color="white">
          Song info or lyrics can go here
        </Text>
        <input
          type="range"
          id="progress"
          min="0"
          max="100"
          step="1"
          defaultValue="0"
          style={{ width: '50%', height: '6px',  borderRadius: '4px', cursor: 'pointer', margin: 'left' }}
        />
        <Center className="controls">
          <Button className="previous-btn" width="60px" height="60px" margin="20px" backgroundColor="white" borderRadius="50%" color="purple" boxShadow="0 5px 20px rgba(246, 243, 243, 0.22)" onClick={playPreviousSong}>
            Prev
          </Button>
          {isPlaying ? (
            <Button className="play-pause-btn" width="60px" height="60px" margin="20px" backgroundColor="#0e02f8" color="purple" borderRadius="50%" boxShadow="0 5px 20px rgba(246, 243, 243, 0.22)" onClick={pauseSong}>
              Pause
            </Button>
          ) : (
            <Button className="play-pause-btn" width="60px" height="60px" margin="20px" backgroundColor="white" borderRadius="50%" color="purple" boxShadow="0 5px 20px rgba(246, 243, 243, 0.22)" onClick={playSong}>
              Play
            </Button>
          )}
          <Button className="next-btn" width="60px" height="60px" margin="20px" backgroundColor="white" borderRadius="50%" color="purple" boxShadow="0 5px 20px rgba(246, 243, 243, 0.22)" onClick={playNextSong}>
            Next
          </Button>
        </Center>
      </Box>
      <audio ref={audioRef} src={song} />
    </Box>
  );
};

export default Music;
