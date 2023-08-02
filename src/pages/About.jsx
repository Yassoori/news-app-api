import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Puff } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { ArticleContext } from '../context/ArticleContext'

const About = () => {
  return (
    <div>
      <div className="yassercontent">
        <img src="public/image/about-image.jpg" alt="I am very handsome" className='yasserimage'/>
        <div className="yassertext">
          {/* <h2 className='yassername'>Yasser Saeed</h2> */}
          <p className='description'>Yasser Saeed is a multidisciplinary artist and photographer of Iraqi descent, based in Auckland New Zealand, his birthplace. He studied Architecture at the University of Auckland and Fine Arts at Whitecliffe College of Art and Design and works with photography, mixed media and digital art. His work is varied in its inspirations from architecture to ancient Middle Eastern history and ruins to written script but runs the common method of abstraction of forms and complex compositions, with themes leaking into one another.</p>
          <p className='description'>In 2018, He was awarded the Emerging Artist Award, at the Riley Consultants Members Merit Awards and Exhibition at Lake House Arts Centre, for his digital and photographic prints and his work “Text Experiment” was acquired by the James Wallace Arts Trust.</p>
        </div>
      </div>
    </div>
  )
}

export default About
