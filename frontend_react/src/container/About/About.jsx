import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// import { images } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './About.scss'

// const abouts = [
//   {
//     title: "CS student",
//     desc: "Iam an engineering student",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Software Engineer",
//     desc: "Iam an engineering student",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Full Stack developer",
//     desc: "Iam an engineering student",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Graphic designer",
//     desc: "Iam an engineering student",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className='head-text'>
        I'm a <span>Computer Science</span> student <br />
        currently making my way through <span>Final Year</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            {/* <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.desc}
            </p> */}

            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p
              className='p-text'
              style={{ marginTop: 10, textAlign: 'center' }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
)
