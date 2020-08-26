import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
function VideoFooter({ url, likes, shares, channel, avatarSrc, song }) {
    return (
        <div className="video-footer">
            <div className="video-footer-text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} ◻ <Button>Follow</Button>
                </h3>
                <div className="video-footer-ticker">
                    <MusicNoteIcon
                        className="video-footer-icon">

                    </MusicNoteIcon>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <h1>{song}</h1>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>

        </div>
    )
}

export default VideoFooter;
