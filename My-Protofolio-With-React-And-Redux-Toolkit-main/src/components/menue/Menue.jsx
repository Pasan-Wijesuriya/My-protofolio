import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Toggle from '../toggle/Toggle'

import './menue.scss'

export default function Menue ({ openMenue, handeleMenue }) {
  const theamState = useSelector(state => state)
  return (
    <div
      className={'menue ' + (openMenue && 'active')}
      style={{ background: theamState.value && '#333' }}
    >
      <ul className='list'>
        <li onClick={() => handeleMenue(!openMenue)}>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>
          <Link to='/projects'>Works</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>
          <Link to='/contact'>Contact</Link>
        </li>
        <li onClick={() => handeleMenue(false)}>
          <Toggle />
        </li>
      </ul>
    </div>
  )
}
