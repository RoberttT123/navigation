import React from 'react'
import {BrowserRouter,Routes,Route,NavLink,Navigate} from 'react-router-dom'
import { Home } from '../componentes/Home'
import { About } from '../componentes/About'
import {Dashboard} from '../componentes/Dashboard'
import '../styles/Header.css'
function Navigation() {
  return (
      <BrowserRouter>
      <nav>
          <ul>
              <li>
                  <NavLink to='home' className={({isActive}) => isActive ? 'nav-active' : ''}>
                 Home  
                  </NavLink>
                </li>
                <li>
              <NavLink to='About' className={({isActive}) => isActive ? 'nav-active' : ''}>
              About
                </NavLink>  
                </li>
                <li>
              <NavLink to='Dashboard' className={({isActive}) => isActive ? 'nav-active' : ''}>
              Dashboard
                </NavLink>
                 
                </li>
                </ul>
      </nav>
        <Routes>
          <Route path='Home' element={<Home/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/>
          <Route path='/*' element={<Navigate to='/Home' /> }/>
      </Routes>

    </BrowserRouter>
  )
}

export default Navigation