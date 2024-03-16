'use client'

import {useAppDispatch} from '@/hooks/redux'
import {useAppSelector} from '@/hooks/redux'
import {testSlice} from '@/store/reducers/TestSlice'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import {NavBar} from '@/components/NavBar'
import AboutLayout from '../AboutLayout'
import StackLayout from '../StackLayout'
import ExperienceLayout from '../ExperienceLayout'
import FooterLayout from '../FooterLayout'

import {Parallax, ParallaxLayer, ParallaxLayerProps} from '@react-spring/parallax'

export default function HomePageLayout() {
  const dispatch = useAppDispatch()

  return (
    <main className={`${styles.homePageLayoutWrapper} flex flex-col items-center`}>
      <NavBar />
      <div className={`${styles.homePageLayout} relative h-full w-screen z-20`}>
        <Parallax
          pages={4}
          style={{top: '0', left: '0', width: '100vw'}}>
          <ParallaxLayer
            offset={0}
            factor={1 / 2}
            sticky={{start: 0, end: 1}}
            speed={2}>
            <AboutLayout />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            sticky={{start: 1, end: 2.5 / 2}}
            speed={2}>
            <StackLayout />
            <ExperienceLayout />
            <FooterLayout />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  )
}
