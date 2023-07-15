import React from 'react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../Components/Home/home'
import Project from '../Components/Project/project'
import About from '../Components/About/about'
import Contact from '../Components/Contact/contact'

const RouteAllFiles = () => {
  return (
    <>
      <Route path='/' exact><Home/></Route>
      <Route path='/project'><Project/></Route>
      <Route path ='/about'><About/></Route>
      <Route path='/contact'><Contact/></Route>
    </>
  )
}

export default RouteAllFiles
