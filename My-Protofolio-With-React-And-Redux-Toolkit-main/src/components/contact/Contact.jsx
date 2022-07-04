import './contact.scss'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState } from 'react'
import Fade from 'react-reveal/Fade'

import emailjs from 'emailjs-com'
import { useSelector } from 'react-redux'

export default function Contact () {
  const formRef = useRef()
  const [done, setDone] = useState()
  const theamState = useSelector(state => state)

  const handelSubmit = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_34ehnfo',
        'template_l30h67z',
        formRef.current,
        'user_XkHowpzeoMvwEDtlXZ6D8'
      )
      .then(
        result => {
          console.log(result.text)
          setDone(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div
      className='contact'
      style={{
        background: theamState.value && '#222',
        color: theamState.value && 'white'
      }}
    >
      <div className='c-bg'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 c-left'>
            <Fade left>
              <h1 className='c-title'>Let's discuss your project</h1>
              <div className='c-info'>
                <div className='c-info-item'>
                  <img src={Phone} alt='' className='c-icon' />
                  +20 101 604 629 8
                </div>
                <div className='c-info-item'>
                  <img className='c-icon' src={Email} alt='' />
                  <a href='mailto:omarwork010@gmail.com'>
                    omarwork010@gmail.com
                  </a>
                </div>
                <div className='c-info-item'>
                  <img className='c-icon' src={Address} alt='' />
                  Alexandria - El Mandara
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-lg-6 c-right'>
            <Fade right>
              <p className='c-desc'>
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form ref={formRef} onSubmit={handelSubmit}>
                <input
                  style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Name'
                  name='user_name'
                />
                <input
                  style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Subject'
                  name='user_subject'
                />
                <input
                  style={{ backgroundColor: theamState.value && '#333' }}
                  type='text'
                  placeholder='Email'
                  name='user_email'
                />
                <textarea
                  style={{ backgroundColor: theamState.value && '#333' }}
                  rows='5'
                  placeholder='Message'
                  name='message'
                />
                <button>Submit</button>
                {done && 'Thanks Alot ...'}
              </form>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
