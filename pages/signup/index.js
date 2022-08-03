import React from 'react';
import { TextField } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpg'

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo} />
        <TextField id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth/>
        <TextField id="outlined-basic" size='small' label="Password" type="password" variant="outlined" fullWidth/>
        <TextField id="outlined-basic" size='small' label="Full Name" variant="outlined" fullWidth/>
        </div>
    </div>
  )
}

export default index