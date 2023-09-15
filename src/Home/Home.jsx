import React from 'react'
import avatar from '../img/avatar.png'

export default function Home() {
  return (
    <div className='home-section p-4'>
      <img src={avatar} alt="avatar" />
      <h2 className='mt-3'>START FRAMEWORK</h2>
      <i className="fa-solid fa-star mt-1 mb-3"></i>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
