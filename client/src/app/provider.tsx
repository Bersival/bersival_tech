'use client'

import {PropsWithChildren, useState} from 'react'

import ReduxProvider from './redux-provider'

export default function Providers({children}: PropsWithChildren<any>) {

  return (
    <ReduxProvider>
        {children}
    </ReduxProvider>
  )
}
