//у приложения будет общий лэйаут внутри которого будет навбар и после него 
//все элементы находящиеся внутри тэга лэйаут в апп

import React from 'react'
import {Navbar} from './Navbar.jsx'

export const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className = 'container mx-auto'>
        <Navbar />
        {children}
      </div>
    </React.Fragment>
  )
}
