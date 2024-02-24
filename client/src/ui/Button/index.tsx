import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
interface ButtonPropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const Button: React.FC<any> = ({children, ...props}: ButtonPropsType) => {
  return (
    <button
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.Button}`}>
      {children}
    </button>
  )
}
