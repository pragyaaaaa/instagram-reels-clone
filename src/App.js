import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.svg';
import VideoCard from './VideoCard';
import db from './firebase';
import video from './dummyVideo.mp4';

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection('instagram-reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  return (
    <div className="app">
      <div className="app-top">
        {/* image */}
        <img
          className="app-logo"
          src={logo}
          alt="instagram-logo">
        </img>
        {/* reels text */}
        <h1>Reels</h1>
      </div>
      <div className="app-videos">
        {/* Scrollable container for videos */}
        {reels.map(({likes, shares, channel, avatarSrc, song})=>(
          <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={video}
          likes={likes}
          shares={shares}/>
        ))}
        {/* video */}
        {/* video */}
        {/* video */}
        {/* video */}
      </div>
    </div>
  );
}

export default App;
