import React from 'react'
import './HomePage.css'
import imageBg from '../../Assets/Home-Page.png'
import imageBus from '../../Assets/Bus1.png'


export default function HomePage() {

  return (
    <>
      <div className='home-page' id='HomePage'>
        <img className='imageBg' src={imageBg} alt='' />
        <img id='Bus' className='imageBus' src={imageBus} alt='' />
        <div className='heading-bg'>.
          <h1 className='heading'>Welcome to Metro Bus Tracking Application!</h1>
        </div>
      </div>
    </>
  )
}

