import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
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
                <div className="video-footer-action">
                    <div className="video-footer-action-left">
                        <FavoriteIcon fontSize="large"></FavoriteIcon>
                        <ModeCommentIcon fontSize="large"></ModeCommentIcon>
                        <SendIcon fontSize="large"></SendIcon>
                        <MoreHorizIcon fontSize="large"></MoreHorizIcon>
                    </div>
                    <div className="video-footer-action-right">
                        <div className="video-footer-stat">
                            <FavoriteIcon></FavoriteIcon>
                            <p>{likes}</p>
                        </div>
                        <div className="video-footer-stat">
                            <ModeCommentIcon></ModeCommentIcon>
                            <p>{shares}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoFooter;
