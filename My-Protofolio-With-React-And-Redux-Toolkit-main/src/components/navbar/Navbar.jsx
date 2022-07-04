import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar ({ openMenue, handeleMenue }) {
  const theamState = useSelector(state => state)
  return (
    <div
      className={'navbar ' + (openMenue && 'active')}
      style={{
        background: theamState.value && '#333',
        color: theamState.value && '#fff'
      }}
    >
      <div className='navbarCon'>
        <div className='left'>
          <Link to='/' className='logo'>
            Omar Ahmed..
          </Link>
          <div className='navbar-contact'>
            <i className='far fa-envelope-open'></i>
            <a href='mailto:omarwork010@gmail.com'>omarwork010@gmail.com</a>
          </div>
          <div className='navbar-contact'>
            <i className='fas fa-phone'></i>
            <span>01006129547</span>
          </div>
        </div>
        <div className='right' onClick={() => handeleMenue(!openMenue)}>
          <span
            className='one'
            style={{ background: theamState.value && '#fff' }}
          ></span>
          <span
            className='two'
            style={{ background: theamState.value && '#fff' }}
          ></span>
          <span
            className='three'
            style={{ background: theamState.value && '#fff' }}
          ></span>
        </div>
      </div>
    </div>
  )
}
