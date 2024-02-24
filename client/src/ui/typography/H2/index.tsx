import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
interface H2PropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const H2: React.FC<any> = ({children, ...props}: H2PropsType) => {
  return (
    <h2
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.H2}`}>
      {children}
    </h2>
  )
}
