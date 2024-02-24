import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
interface H1PropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const H1: React.FC<any> = ({children, ...props}: H1PropsType) => {
  return (
    <h1
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.H1}`}>
      {children}
    </h1>
  )
}
