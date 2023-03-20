import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message
    }

    client
      .create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className='head-text'>
        Take a <span>coffee</span> & Mail me
      </h2>
      <h3 className='p-text' style={{ fontSize: '1.5em', color: '#ffcc00' }}>
        Though if you want to Buy me a coffee you can!
      </h3>

      <a
        href='https://www.buymeacoffee.com/getsoumya'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
          alt='Buy Me A Coffee'
          style={{ width: '18em', marginTop: '1em' }}
        />
      </a>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.gmail} alt='email' />
          <a href='mailto:cse2019026@rcciit.org.in' className='p-text'>
            cse2019026@rcciit.org.in
          </a>
        </div>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:get.soumya2000@gmail.com' className='p-text'>
            get.soumya2000@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+1 (123) 456-7890' className='p-text'>
            +1 (123) 456-7890
          </a>
        </div>
      </div>

      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, type: 'tween' }}
        // className="app__profile-item"
        // key={about.title + index}
      >
        <h3 className='p-text' style={{ fontSize: '1.5em' }}>
          No, it's not a template; the form below actually works 😶
        </h3>
      </motion.div>

      {!isFormSubmitted
        ? (
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input
                className='p-text'
                type='text'
                placeholder='Your Name'
                name='username'
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className='app__flex'>
              <input
                className='p-text'
                type='email'
                placeholder='Your Email'
                name='email'
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className='p-text'
                placeholder='Your Message'
                value={message}
                name='message'
                onChange={handleChangeInput}
              />
            </div>
            <button type='button' className='p-text' onClick={handleSubmit}>
              {!loading ? 'Send Message' : 'Sending...'}
            </button>
          </div>
          )
        : (
          <div>
            <h3 className='head-text'>Thank you for getting in touch!</h3>
          </div>
          )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
