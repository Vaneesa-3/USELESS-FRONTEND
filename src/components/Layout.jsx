import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}) => {
  return (
    <>
      <Navbar/>
      <div style={{ paddingTop: '64px' }}>{children}</div>
    </>
    
  )
}

export default Layout