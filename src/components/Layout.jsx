import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

function Layout({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
    <Outlet />
    </>
  )
}

export default Layout
