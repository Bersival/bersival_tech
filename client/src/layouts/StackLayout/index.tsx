'use client'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import {H1} from '@/ui/typography/H1'
import {H2} from '@/ui/typography/H2'
import {Button} from '@/ui/Button'
import {Paragraph} from '@/ui/typography/Paragraph'

import Lottie from 'react-lottie'

import {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

import animationData from './lotttieOptions2.json'
const defaultOptions = {
  loop: false,
  autoplay: false,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice', // Supports the same options as SVG's preserveAspectRatio property
  },
}

const stack = {
  frontendStack: [
    'TypeScript',
    'Next.js',
    'React.js',
    'Redux',
    'Node.js',
    'JavaScript',
    'Git',
    'npm / yarn',
    'SASS/SCSS',
    'AntDesign',
    'MaterialUI',
    'Axios',
    'SocketIO',
  ],
  backendStack: [
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
  ],
}

export default function StackLayout() {
  const [isStopped, setIsStopped] = useState<boolean>(true)
  const [lottieOptions, setLottieOptions] = useState(defaultOptions)
  const {ref, inView} = useInView({
    /* Optional options */
    threshold: 0.4, // Trigger when at least 0% of the target is visible
  })

  // This effect will run every time 'inView' changes its value
  useEffect(() => {
    if (inView) {
      console.log('Element is in view!')
      setIsStopped(false)
      // You can trigger any function here
    }
  }, [inView])

  return (
    <section
      id='stack'
      className={`${styles.stackSection}`}
      onClick={() => setIsStopped(false)}>
      <H1 className={`${styles.stackHeadline} text-white`}>Stack</H1>
      <div className={`${styles.skillsBlock} flex w-full`}>
        <div className={`${styles.frontendStack}`}>
          <H2 className='text-white mb-8 mr-52'>Frontend</H2>
          {stack.frontendStack.map((item: string, index) => (
            <Paragraph
              className='text-white text-nowrap'
              key={`${index}_${item}`}>
              {item}
            </Paragraph>
          ))}
        </div>
        <div className={`${styles.backendBlock}`}>
          <H2 className='text-white mb-8'>Backend</H2>
          {stack.backendStack.map((item: string, index) => (
            <Paragraph
              className='text-white text-nowrap'
              key={`${index}_${item}`}>
              {item}
            </Paragraph>
          ))}
        </div>
        <div
          className={`${styles.lottieIconBlock}`}
          ref={ref}>
          <Lottie
            width={700}
            height={700}
            options={lottieOptions}
            isStopped={isStopped}></Lottie>
        </div>
      </div>
    </section>
  )
}
