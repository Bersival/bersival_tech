import React, {useEffect, useState} from 'react'
import styles from './styles.module.scss'
interface ParagraphPropsType {
  children: any
  onClick?: () => {}
  className?: string
}

export const Paragraph: React.FC<any> = ({children, ...props}: ParagraphPropsType) => {
  return (
    <p
      onClick={props.onClick || (() => {})}
      className={`${props?.className || ''} ${styles.Paragraph}`}>
      {children}
    </p>
  )
}