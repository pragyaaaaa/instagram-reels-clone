import React, { useRef, useState } from 'react';
import './VideoCard.css';
import video from './dummyVideo.mp4';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else {
            //play
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader></VideoHeader>
            {/* video */}
            <video
                ref={videoRef}
                onClick={onVideoPress}
                className="videoCard-player"
                src={url}
                alt='instagram reel'
                loop>
            </video>
            <VideoFooter
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                url={url}
                likes={likes}
                shares={shares}>
            </VideoFooter>
        </div>
    )
}

export default VideoCard;
