import React from 'react';
import './VideoHeader.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
export default function VideoHeader() {
    return (
        <div className='video-header'>
            <ArrowBackIosIcon></ArrowBackIosIcon>
            <h3>Reels</h3>
            <CameraAltOutlinedIcon></CameraAltOutlinedIcon>
        </div>
    )
}
