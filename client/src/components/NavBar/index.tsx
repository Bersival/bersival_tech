import React, {use, useCallback, useEffect, useMemo, useState} from 'react'
import styles from './styles.module.scss'
import {Link} from 'react-scroll'
import {scroller} from 'react-scroll'

export const NavBar: React.FC = () => {
  const navItems = useMemo(() => ['About me', 'Stack', 'Experience', 'Links'], [])
  const navLinks = useMemo(() => ['about', 'stack', 'experience', 'footer'], [])

  const [activeToken, setActiveToken] = useState<string>('About me')

  const triggerScrollToElement = async (block: string, item: string) => {
    window.removeEventListener('scroll', handleScroll)
    setActiveToken(item)
    scroller.scrollTo(block, {
      duration: 500,
      delay: 0,
      smooth: true,
    })
    console.warn('triggerScrollToElement', block, item)
    handleScroll()
    setTimeout(() => {
      window.scrollBy({
        top: 2,
        left: 0,
      })
      window.addEventListener('scroll', handleScroll)
    }, 530)
  }

  const handleScroll = useCallback(() => {
    const sections = navLinks
    const currentSection = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 0 && rect.bottom >= 0
      }
      return false
    })
    if (currentSection) {
      const navItem = navItems[sections.indexOf(currentSection)]
      setActiveToken(navItem)
    }
  }, [navLinks, navItems, setActiveToken])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className={styles.navBarWrapper}>
      <nav
        className={styles.navBar}
        role='navigation'>
        <ul>
          {navItems.map((item, index) => (
            <li
              key={item + index}
              onClick={() => triggerScrollToElement(navLinks[navItems.indexOf(item)], item)}
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
