import './about.scss'
import Fade from 'react-reveal/Fade'
import { useSelector } from 'react-redux'

export default function About () {
  const theamState = useSelector(state => state)
  return (
    <div
      className='about'
      style={{ background: theamState.value && '#333' }}
      id='about'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 a-left'>
            <Fade left>
              <div className='a-card bg'></div>
              <div className='a-card'>
                <img src='assets/profileImg/me.jpg' alt='' className='a-img' />
              </div>
            </Fade>
          </div>
          <div className='col-lg-6 a-right'>
            <Fade right>
              <h1 className='a-title'>About Me</h1>
              <p className='a-sub'>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className='a-desc'>
                Hi, I'am Omar Ahmed From Alexandrian I make my components usable
                to use it in many diffrent places with diffrent data that i
                receive from api
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}
