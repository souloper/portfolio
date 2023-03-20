import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a
        href='https://www.linkedin.com/in/getsoumya'
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none', marginTop: '5px' }}
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href='https://github.com/souloper'
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none', marginTop: '5px' }}
      >
        <FiGithub />
      </a>
    </div>
    <div>
      <a
        href='https://twitter.com/Soumya320'
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none', marginTop: '5px' }}
      >
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href='https://www.facebook.com/iamSoUmYa.24'
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none', marginTop: '5px' }}
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href='https://www.instagram.com/soumya__das/'
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none', marginTop: '5px' }}
      >
        <BsInstagram />
      </a>
    </div>
  </div>
)

export default SocialMedia
