import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'

interface TokenPropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const Token: React.FC<any> = ({children, ...props}: TokenPropsType) => {
  return (
    <button
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.Token}`}>
      {children}
    </button>
  )
}
