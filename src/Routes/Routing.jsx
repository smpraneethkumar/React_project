import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'

export class Routing extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    )
  }
}

export default Routing