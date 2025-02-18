import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import Content from './components/Content.jsx'
import About from './components/About.jsx'
import Arraydemo1 from './components/ArrayDemo1.jsx'
import ArrayDemo2 from './components/ArrayDemo2.jsx'
import ArrayDemo3 from './components/ArrayDemo3.jsx'
import { ArrayDemo4 } from './components/ArrayDemo4.jsx'
import City from './components/City.jsx'
import SalesData from './components/SalesData.jsx'
import UseStateDemo1 from './components/UseStateDemo1.jsx'
import UseStateDemo2 from './components/UseStateDemo2.jsx'
import InputDemo1 from './components/InputDemo1.jsx'
import UseStateTask1 from './components/UseStateTask1.jsx'
import UseStateTask2 from './components/UseStateTask2.jsx'
import Navbar from './components/Navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import HotstarHome from './components/Hoststar/HotstarHome.jsx'
import HotstarMovies from './components/Hoststar/HotstarMovies.jsx'
import HotstarWelcome from './components/Hoststar/HotstarWelcome.jsx'
import Error404 from './components/Hoststar/Error404.jsx'
import Play from './components/Hoststar/Play.jsx'
import { FormDemo1 } from './components/Forms/FormDemo1.jsx'
import { FormDemo4 } from './components/Forms/FormDemo4.jsx'
import { FormDemo3 } from './components/Forms/FormDemo3.jsx'
import { FormDemo2 } from './components/Forms/FormDemo2.jsx'
// import { FormDemo5 } from './components/Forms/FormDemo5.jsx'
import {FormDemo5} from './components/Forms/FOrmDemo5.jsx'
import { FormDemo6 } from './components/Forms/FormDemo6.jsx'
import { FormDemo7 } from './components/Forms/FormDemo7.jsx'
import LoginForm from './components/Forms/LoginForm.jsx'
import { FormTask1 } from './components/Forms/FormTask1.jsx'
import Log from './components/Log.jsx'
import {ApiDemo1} from './components/apis/ApiDemo1.jsx'
import Movies from './components/Movies/Movies.jsx'
import MovieDetail from './components/Movies/MovieDetail.jsx'


function App() {
  


  return (
    <>
    <Navbar></Navbar>
    <Routes>
        {/* <Route path ="/" element = {<HotstarWelcome/>}></Route>
        <Route path="/home" element= {<HotstarHome/>}></Route>
        <Route path="/movies" element = {<HotstarMovies></HotstarMovies>}></Route>
        {/* <Route path="/*" element = {<h1>NO PAGE</h1>}></Route> */}
        {/* <Route path="/play/:id" element = {<Play/>}></Route>
        <Route path="/*" element ={<Error404/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
        <Route path='/formdemo2' element = {<FormDemo2/>}></Route>
        <Route path='/formdemo3' element = {<FormDemo3/>}></Route>
        <Route path='/formdemo4' element = {<FormDemo4/>}></Route>
        <Route path='/formdemo5' element = {<FormDemo5/>}></Route>
        <Route path='/formdemo6' element = {<FormDemo6/>}></Route>
        <Route path='/formdemo7' element = {<FormDemo7/>}></Route> 
        <Route path='/login'     element=  {<LoginForm/>}></Route>
        <Route path='/form/task' element={<FormTask1/>}></Route>  */}
        {/* <Route path='/log' element={<Log/>}></Route> */}
        {/* <Route path='/apidemo1' element={<ApiDemo1/>}></Route> */}
        <Route path="/searchmovies" element={<Movies/>}></Route>
        <Route path='/moviedetail/:id' element={<MovieDetail/>}></Route>
      
      
        {/* <Route path='/login2' element={<Login/>}></Route> */}

    </Routes>
    </>
  )
}

export default App
