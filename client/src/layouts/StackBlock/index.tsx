'use client'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import Image from 'next/image'

import {H1} from '@/ui/typography/H1'
import {H2} from '@/ui/typography/H2'
import {Button} from '@/ui/Button'
import {Paragraph} from '@/ui/typography/Paragraph'
import StackIcon from '@/sources/icons/Stack'
import Lottie, {LottieProps} from 'react-lottie'
import animationData from './lottieOptions.json'
import {useState} from 'react'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice', // Supports the same options as SVG's preserveAspectRatio property
  },
}

const frontendStack = [
  'TypeScript',
  'Next.js',
  'React.js',
  'Redux',
  'Node.js',
  'JavaScript',
  'Git',
  'SASS/SCSS',
  'npm / yarn',
  'AntDesign',
  'MaterialUI',
  'Axios',
  'SocketIO',
]

const backendStack = [
  'Python',
  'Flask',
  'Flask_socketio',
  'SQL',
  'Postgresql',
  'SQLAlchemy',
  'WSGI',
  'gunicorn',
  'Redis',
  'Flask_WFT',
  'Eventlet / Gevent',
  'Nginx',
]

export default function StackLayout() {
  const [isStopped, setIsStopped] = useState<boolean>(false)
  return (
    <section
      className={`${styles.stackSection}`}
      onClick={() => setIsStopped(false)}>
      <H1 className={`${styles.stackHeadline} text-white`}>Stack</H1>
      <div className={`${styles.skillsBlock} flex w-full`}>
        <div className={`${styles.frontendStack}`}>
          <H2 className='text-white mb-8 mr-52'>Frontend</H2>
          {frontendStack.map((item: string, index) => (
            <Paragraph
              className='text-white'
              key={`${index}_${item}`}>
              {item}
            </Paragraph>
          ))}
        </div>
        <div className={`${styles.backendBlock}`}>
          <H2 className='text-white mb-8'>Backend</H2>
          {backendStack.map((item: string, index) => (
            <Paragraph
              className='text-white'
              key={`${index}_${item}`}>
              {item}
            </Paragraph>
          ))}
        </div>
        <div className={`${styles.lottieIconBlock}`}>
          {/* <StackIcon /> */}
          <Lottie
            width={700}
            height={700}
            options={defaultOptions}
            isStopped={isStopped}></Lottie>
        </div>
      </div>
    </section>
  )
}
