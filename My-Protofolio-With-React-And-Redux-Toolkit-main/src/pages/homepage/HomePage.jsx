import React from 'react'
import { useSelector } from 'react-redux'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import DownloadCv from '../../components/downloadCv/DownloadCv'
import Intro from '../../components/intro/Intro'
import ProductList from '../../components/productList/ProductList'
import './homePage.scss'

export default function HomePage () {
  const theamState = useSelector(state => state)
  return (
    <div
      className='homePage'
      style={{
        background: theamState.value && '#222',
        color: theamState.value && '#fff'
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <DownloadCv />
      <Contact />
    </div>
  )
}
