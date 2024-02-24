'use client'

import {H1} from '@/ui/typography/H1'
import {H2} from '@/ui/typography/H2'

import {useAppDispatch} from '@/hooks/redux'
import {useAppSelector} from '@/hooks/redux'
import {testSlice} from '@/store/reducers/TestSlice'

import '@/styles/globals.scss'
import {Button} from '@/ui/Button'
import {NavBar} from '@/components/NavBar'
import WakatimeIcon from '@/sources/icons/Wakatime'
import HomePageLayout from '@/layouts/HomepageLayout'

export default function Home() {
  const dispatch = useAppDispatch()
  const test = useAppSelector(state => state.test)
  const {sayHello, increment} = testSlice.actions
  const handleBtnClick = () => {
    dispatch(sayHello())
    dispatch(increment())
  }

  return <HomePageLayout />
}
