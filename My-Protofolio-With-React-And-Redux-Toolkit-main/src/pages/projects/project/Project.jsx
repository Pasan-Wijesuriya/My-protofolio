import React from 'react'
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'
import { useParams } from 'react-router-dom'
import './project.scss'

export default function Project ({ dataProjectsPage }) {
  const projectName = useParams()
  const theamState = useSelector(state => state)

  const singleData = dataProjectsPage.filter(
    data => data.title === projectName.name
  )

  return (
    <div
      className='projectPage'
      style={{ background: theamState.value && '#222' }}
    >
      <div className='container'>
        {singleData.map(singleProject => (
          <div className='row' key={Math.random()}>
            <div className='col-md-8'>
              <Fade left>
                <div className='desctop-info'>
                  <h3
                    className='info-title'
                    style={{ color: theamState.value && '#eee' }}
                  >
                    Project in Website
                  </h3>
                  <div className='imgContainer lab'>
                    <img
                      src={
                        theamState.value
                          ? '/assets/labDark.png'
                          : '/assets/lab.png'
                      }
                      alt='labtop'
                    />
                    <img src={singleProject.img} alt='' className='img-fluid' />
                  </div>
                </div>
                <div className='mobile-info'>
                  <h3
                    className='info-title'
                    style={{ color: theamState.value && '#eee' }}
                  >
                    Project in Mobile
                  </h3>
                  <div className='imgContainer'>
                    <img
                      src={
                        theamState.value
                          ? '/assets/phoneDark.png'
                          : '/assets/phone.png'
                      }
                      alt='phone'
                    />
                    <img
                      src={singleProject.mobileImg}
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                </div>
              </Fade>
            </div>
            <div className='col-md-4'>
              <Fade right>
                <div className='project-info'>
                  <h3
                    className='about-project'
                    style={{ color: theamState.value && '#eee' }}
                  >
                    {singleProject.title}
                  </h3>
                  <p>{singleProject.desc}</p>
                  <div className='made-by'>
                    <h3
                      className='about-project'
                      style={{ color: theamState.value && '#eee' }}
                    >
                      made with
                    </h3>
                    {singleProject.madeWith.map(s => (
                      <span
                        style={{ background: theamState.value && '#333' }}
                        key={Math.random()}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className='links'>
                    <h3
                      className='about-project'
                      style={{ color: theamState.value && '#eee' }}
                    >
                      project links
                    </h3>
                    <div className='links-container'>
                      <a
                        href={singleProject.code}
                        target='_blank'
                        rel='noreferrer'
                        style={{ background: `${singleProject.buttonColor}` }}
                      >
                        Code
                      </a>
                      <a
                        href={singleProject.link}
                        target='_blank'
                        rel='noreferrer'
                        style={{ background: `${singleProject.buttonColor}` }}
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
