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
import WakaTimeIcon from '@/sources/icons/Wakatime'
import CodewarsIcon from '@/sources/icons/Codewars'
import LeetcodeIcon from '@/sources/icons/Leetcode'

interface LinkItem {
  name: string
  link: string
  icon: ReactElement
}

const links: LinkItem[] = [
  {name: 'CV', link: '', icon: <CvIcon />},
  {name: 'Telegram', link: 'https://t.me/bersival', icon: <TelegramIcon />},
  {name: 'GitHub', link: 'https://github.com/bersival', icon: <GithubIcon />},
  {name: 'CodeWars', link: 'https://www.codewars.com/users/Bersival', icon: <CodewarsIcon />},
  {name: 'LeetCode', link: 'https://leetcode.com/Bersival', icon: <LeetcodeIcon />},
  {name: 'WakaTime', link: 'https://wakatime.com/@Bersival', icon: <WakaTimeIcon />},
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
