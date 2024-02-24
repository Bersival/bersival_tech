'use client'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import Image from 'next/image'

import {H1} from '@/ui/typography/H1'
import {H2} from '@/ui/typography/H2'
import {Button} from '@/ui/Button'
import {Paragraph} from '@/ui/typography/Paragraph'

import WakatimeIcon from '@/sources/icons/Wakatime'
import CvIcon from '@/sources/icons/Cv'
import GithubIcon from '@/sources/icons/Github'
import TelegramIcon from '@/sources/icons/Telegram'
import MailIcon from '@/sources/icons/Mail'

export default function AboutLayout() {
  return (
    <section className={`${styles.aboutBlock}`}>
      <div className='text-white opacity-50 select-none text-right absolute right-0 top-0 blur-sm'>
        <H2 className='mb-4'>ReactJS</H2>
        <H2 className='mb-4'>NextJS</H2>
        <H2 className='mb-4'>Redux</H2>
        <H2 className='mb-4'>Git</H2>
        <H2 className='mb-4'>TypeScript</H2>
        <H2 className='mb-4'>SASS/SCSS</H2>
        <H2 className='mb-4'>Tailwind</H2>
      </div>
      <div className='w-full select-none z-50'>
        <div className='flex items-center flex-col mb-11'>
          <Image
            className='mt-60 z-50'
            src={'/images/avatar.png'}
            alt='avatar'
            width={450}
            height={450}></Image>
        </div>
        <div className={`${styles.nameHeadlineBlock}`}>
          <H1 className={`${styles.nameHeadline} text-white`}>Boris Ovchinnikov</H1>
          <Paragraph className='text-white mb-6'>
            Hi! My name is Boris. I'm a Front-End Developer in Russia, Ekaterinburg. <br />I have serious passion for
            pure code, UI effects, animations and creating intuitive, dynamic user experiences.
          </Paragraph>
          <ul className='flex'>
            <li className='mr-8'>
              <Button>
                <CvIcon /> <span className='ml-2'>CV</span>
              </Button>
            </li>
            <li className='mr-8'>
              <Button>
                <GithubIcon /> <span className='ml-2'>Github</span>
              </Button>
            </li>
            <li className='mr-8'>
              <Button>
                <WakatimeIcon /> <span className='ml-2'>Wakatime</span>
              </Button>
            </li>
            <li className='mr-8'>
              <Button>
                <TelegramIcon /> <span className='ml-2'>Telegram</span>
              </Button>
            </li>
            <li className='mr-8'>
              <Button>
                <MailIcon /> <span className='ml-2'>E-mail</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
