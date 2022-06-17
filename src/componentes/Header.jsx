import React from 'react'

function Header() {
  return (
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

   
   
  )
}

export { Header}