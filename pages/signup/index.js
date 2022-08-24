import React from 'react';
import { TextField, Button } from '@mui/material';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpg'   
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Link from 'next/link';

function index() {
  return (
    <div className='signup-container'>
        <div className='signup-card'>
          <Image src={logo} />
          <TextField id="outlined-basic" size='small' label="Email" variant="outlined" fullWidth/>
          <TextField id="outlined-basic" size='small' label="Password" type="password" variant="outlined" fullWidth/>
          <TextField id="outlined-basic" size='small' label="Full Name" variant="outlined" fullWidth/>
          <Button variant="outlined" color='secondary' component="label" fullWidth>
            <CloudUploadIcon /> UPLOAD PROFILE IMAGE
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button variant="contained" component="label" fullWidth>
            SIGN UP
          </Button>
          <div className='tnc'>By signing up, you agree to our Terms, Conditions and Cookies policy.</div>
        </div>
        <div className='bottom-card'>Already Have an account ? <Link href="/login"> <span style={{color:"purple"}} >Login</span></Link></div>
    </div>
  )
}

export default index