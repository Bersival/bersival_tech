import React, { useState } from 'react'
import styles from './styles.module.scss'

type NavBarProps = {
  // Prop types goes here
}

export const NavBar: React.FC<NavBarProps> = props => {
  const navItems = ['About me', 'Stack', 'Projects', 'Links']
  const [activeToken, setActiveToken] = useState<string>('About me')
  return (
    <div className={styles.NavBarWrapper}>
      <nav
        className={styles.NavBar}
        role='navigation'>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveToken(item)}
              className={styles['nav-item'] + ' ' + (item === activeToken ? styles['active'] : '')}>
              {item}
            </li>
          ))}
          <div className={styles.indicator}></div>
        </ul>
      </nav>
    </div>
  )
}
