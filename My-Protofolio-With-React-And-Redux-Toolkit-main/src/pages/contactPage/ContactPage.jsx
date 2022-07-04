import React from 'react'
import { useSelector } from 'react-redux'
import Contact from '../../components/contact/Contact'
import './contactPage.scss'

export default function ContactPage () {
  const theamState = useSelector(state => state)
  return (
    <div
      className='contactPage'
      style={{ background: theamState.value && '#222' }}
    >
      <Contact />
    </div>
  )
}
