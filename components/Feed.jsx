import { Avatar } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className='feed-container'>
      <Navbar />
      <Upload />
      <div className="videos-container">
        <div className="post-container">
          <video />
          <div className="video-info">
            <div className="avatar-container">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:"0.5rem"}} />
            <p>Akash Pal</p>
            </div>
            <div className="post-like">
              <FavoriteIcon />
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed