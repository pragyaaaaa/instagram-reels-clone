import React from 'react'
import './VideoFooter.css'
import {Button, Avatar} from '@material-ui/core';
function VideoFooter({url, likes, shares, channel, avatarSrc, song}) {
    return (
        <div className="video-footer">
            <div className="video-footer-text">
            <Avatar src={avatarSrc}/>
            <h3>
                {channel} ◻ <Button>Follow</Button>
            </h3>
            </div>
            
        </div>
    )
}

export default VideoFooter;
