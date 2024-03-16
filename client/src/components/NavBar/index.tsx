import React, {useState} from 'react'
import styles from './styles.module.scss'
import {Link} from 'react-scroll'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = props => {
  const navItems = ['About me', 'Stack', 'Experience', 'Links'] // titles
  const navLinks = ['about', 'stack', 'experience', 'footer'] // anchors

  // const [activeToken, setActiveToken] = useState<string>('About me')

  return (
    <div className={styles.navBarWrapper}>
      <nav
        className={styles.navBar}
        role='navigation'>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={index}
              // onClick={() => setActiveToken(item)}
              className={styles['nav-item'] + ' ' + (item === '' ? styles['active'] : '')}>
              <a href={`#${navLinks[index]}`}>{item}</a>
            </li>
          ))}
          {/* <div className={styles.indicator}></div> */}
        </ul>
      </nav>
    </div>
  )
}
