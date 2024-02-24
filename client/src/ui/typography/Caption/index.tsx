import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
interface CaptionPropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const Caption: React.FC<any> = ({children, ...props}: CaptionPropsType) => {
  return (
    <p
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.Caption}`}>
      {children}
    </p>
  )
}
