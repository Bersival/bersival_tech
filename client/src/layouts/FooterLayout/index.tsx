// 'use client' remains at the top if you're using Next.js 12.2 or later for client-side components
'use client'

import '@/styles/globals.scss'
import styles from './styles.module.scss'

import {H1} from '@/ui/typography/H1'
import {ProjectCard} from '@/components/ProjectCard'
import GithubIcon from '@/sources/icons/Github'
import {Button} from '@/ui/Button'
import Link from 'next/link'
import {ReactElement} from 'react'
import CvIcon from '@/sources/icons/Cv'
import TelegramIcon from '@/sources/icons/Telegram'

interface LinkItem {
  name: string
  link: string
  icon: ReactElement
}

const links: LinkItem[] = [
  {name: 'telegram', link: 'https://t.me/bersival', icon: <TelegramIcon />},
  {name: 'cv', link: '', icon: <CvIcon />},
  {name: 'github', link: 'https://github.com/bersival', icon: <GithubIcon />},
]

export default function FooterLayout() {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.footerWrapper}`}>
        <H1 className='text-white mb-14'>Links</H1>

        <div className={`${styles.linksBlock} grid w-full`}>
          {links.map((link, index) => (
            <Link href={link.link}>
              <Button key={index}>
                {link.icon}
                <span className='ml-2'>{link.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
