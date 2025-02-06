import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import Content from './components/Content.jsx'
import About from './components/About.jsx'

function App() {
  


  return (
    <>
    <Header></Header>
    {/* <Content></Content> */}
    <About></About>
    <Footer></Footer>
    </>
  )
}

export default App
