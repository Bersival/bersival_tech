import React, {useState} from 'react'
import styles from './styles.module.scss'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = props => {
  const navItems = ['About me', 'Stack', 'Projects', 'Links']
  const [activeToken, setActiveToken] = useState<string>('About me')
  return (
    <div className={styles.navBarWrapper}>
      <nav
        className={styles.navBar}
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
