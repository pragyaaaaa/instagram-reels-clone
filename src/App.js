import React from 'react';
import './App.css';
import logo from './logo.svg';
import VideoCard from './VideoCard';

function App() {
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
        <VideoCard
          channel={channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}>
        </VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        <VideoCard></VideoCard>
        {/* video */}
        {/* video */}
        {/* video */}
        {/* video */}
      </div>
    </div>
  );
}

export default App;
