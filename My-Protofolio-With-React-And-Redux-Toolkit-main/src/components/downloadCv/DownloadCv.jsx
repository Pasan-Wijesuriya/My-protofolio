import React from 'react'
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'
import './downloadCv.scss'

export default function DownloadCv () {
  const theamState = useSelector(state => state)
  return (
    <div
      className='cv'
      style={{
        background: theamState.value && '#333',
        color: theamState.value && '#fff'
      }}
    >
      <div className='container'>
        <Fade top>
          <h3 className='cv-info'>check my CV...</h3>
        </Fade>
        <Fade bottom>
          <a href='assets/Omar - Ahmed.pdf
' download>
            download
          </a>
        </Fade>
      </div>
    </div>
  )
}
