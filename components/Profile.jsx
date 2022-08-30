import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import user from '../assets/avatar.png'

function Profile() {
  return (
    <div>
        <Navbar />
        <div>
            <div className="profile-intro">
                <div style={{height:"8rem", width:"8rem", clipPath:"circle(50%)"}}>
                    <Image src={user}/>
                </div>
                <div>
                  <h1>Akash</h1>
                  <h1>Posts:10</h1>
                </div>
            </div>
            <hr />
            <div className="profile-posts">

            </div>
        </div>
    </div>
  )
}

export default Profile