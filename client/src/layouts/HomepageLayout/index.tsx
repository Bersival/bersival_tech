'use client'

import {useAppDispatch} from '@/hooks/redux'
import {useAppSelector} from '@/hooks/redux'
import {testSlice} from '@/store/reducers/TestSlice'

import '@/styles/globals.scss'
import styles from './style.module.scss'

import {NavBar} from '@/components/NavBar'
import AboutLayout from '../AboutLayout'
import StackLayout from '../StackLayout'

export default function HomePageLayout() {
  const dispatch = useAppDispatch()
  const test = useAppSelector(state => state.test)
  const {sayHello, increment} = testSlice.actions
  const handleBtnClick = () => {
    dispatch(sayHello())
    dispatch(increment())
  }

  return (
    <main className={`${styles.HomePageLayoutWrapper} flex flex-col items-center`}>
      <NavBar />
      <div className={`${styles.HomePageLayout} relative h-full w-screen z-20`}>
        <AboutLayout />
        <StackLayout />
      </div>
    </main>
  )
}
