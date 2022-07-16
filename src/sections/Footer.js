import React from 'react'
import './Footer.css'
import { RiCopyrightLine } from 'react-icons/ri'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaPinterestSquare } from 'react-icons/fa'
import { FaGooglePlay } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id='Footer' className='footer'>
      <div className="container">
        <div className="d-flex" style={{ paddingTop: '5vh' }}>
          <h3 className='me-auto' >Metro Bus Tracking Application</h3>
          <p className='p-2'><a className='FooterIcons' href="/"><FaFacebookSquare /></a></p>
          <p className='p-2'><a className='FooterIcons' href="/"><FaTwitterSquare /></a></p>
          <p className='p-2'><a className='FooterIcons' href="/"><FaLinkedin /></a></p>
          <p className='p-2'><a className='FooterIcons' href="/"><FaPinterestSquare /></a></p>
        </div>
        <div className="d-flex">
          <div className="me-auto">
            <p><RiCopyrightLine />2022 BRT Apps</p>
          </div>
          <a className='button' href="/">
            <div id='Google' className='d-flex mx-2' style={{height:'3.5rem', border: '2px solid white', borderRadius: '1rem' }}>
              <div className='up2' style={{ fontSize: '2.1rem',color:'inherit',padding:'0 0.5rem 0.3rem 0.8rem' }} ><FaGooglePlay/></div>
              <p style={{ padding: '0px 1rem 0 0', marginBottom:'0px' }}><span style={{ fontSize: '0.7rem' }}>GET IT ON</span> <br />Google Play</p>
            </div>
          </a>
          <a className='button' href="/">
            <div id='Apple' className='d-flex mx-2' style={{height:'3.5rem', border: '2px solid white', borderRadius: '1rem' }}>
              <div className='up1' style={{ fontSize: '2.5rem',color:'inherit',padding:'0 0.3rem 0.3rem 0.4rem' }} ><FaApple/></div>
              <p style={{ padding: '0px 0.8rem 0 0', marginBottom:'0px' }}><span style={{ fontSize: '0.7rem' }}>GET IT ON</span><br />Apple Store</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
