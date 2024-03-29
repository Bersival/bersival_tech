'use client'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import {NavBar} from '@/components/NavBar'
import AboutLayout from '../AboutLayout'
import StackLayout from '../StackLayout'
import ExperienceLayout from '../ExperienceLayout'
import FooterLayout from '../FooterLayout'

export default function HomePageLayout() {
  return (
    <main className={`${styles.homePageLayoutWrapper} flex flex-col items-center`}>
      <NavBar />
      <div className={`${styles.homePageLayout} relative h-full w-screen z-20`}>
        <AboutLayout />
        <StackLayout />
        <ExperienceLayout />
        <FooterLayout />
      </div>
    </main>
  )
}
