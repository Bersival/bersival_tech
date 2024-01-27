'use client'

import Image from 'next/image'

import '@/styles/globals.scss'
import {useAppDispatch} from '@/hooks/redux'
import {useAppSelector} from '@/hooks/redux'
import {testSlice} from '@/store/reducers/TestSlice'
import {memo} from 'react'

export default function Home() {
  const dispatch = useAppDispatch()
  const test = useAppSelector(state => state.test)
  const {sayHello, increment} = testSlice.actions
  const handleBtnClick = () => {
    dispatch(sayHello())
    dispatch(increment())
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-white opacity-50 select-none text-4xl'>
        git status <br />
        git add -A <br />
        git commit -am <br />
        git checkout master <br />
        git checkout -B bersival
      </h1>
      <button
        onClick={() => handleBtnClick()}
        className='text-white bg-cyan-500'>
        Click on me {test.count}
      </button>
    </main>
  )
}
