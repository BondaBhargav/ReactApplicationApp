import React from 'react'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='m-3'>
      <center><h1>
        Welcome to React World
      </h1></center>
    <Outlet />
    </div>
    
  )
}
