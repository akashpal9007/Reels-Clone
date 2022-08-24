import { Button, LinearProgress } from '@mui/material'
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';

function Upload() {
  return (
    <div className='upload-btn'>
    <Button variant="outlined" size='large' color='secondary' component="label" startIcon={<MovieIcon />} >
            UPLOAD VIDEO
            <input hidden accept="*" multiple type="file" />
    </Button>
    <LinearProgress variant="determinate" color='secondary' value={"30"} sx={{mt:"0.2rem"}} />
    </div>
  )
}

export default Upload