'use client'

import React, {useState} from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import {H2} from '@/ui/typography/H2'
import {Button} from '@/ui/Button'
import {Paragraph} from '@/ui/typography/Paragraph'
import {Token} from '@/ui/Token'

interface ProjectCardProps {
  projectHeader: string
  mainStack: Array<string>
  jobTitle?: string
  isNda?: boolean
  gradientBg?: string
  projectImage?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = props => {
  return (
    <div className={styles.projectCard}>
      <Image
        className={styles.gradientBg}
        src={props?.gradientBg || ''}
        width={510}
        height={350}
        alt={'gradientBg'}></Image>
      <div className={`${styles.projectInfo} flex mb-3 items-center`}>
        <H2 className='text-white mr-4'>{props.projectHeader}</H2>
        {props?.isNda ? <Token className='mr-4'>NDA</Token> : null}
        <div className='w-px h-full text-white select-none text-3xl font-thin mr-2'>|</div>
        <div className='ml-4'>
          {props.mainStack.map(item => (
            <Token
              key={item}
              className='mr-2'>
              {item}
            </Token>
          ))}
        </div>
      </div>
      <Paragraph className={`${styles.jobTitle} text-white`}>{props.jobTitle}</Paragraph>
      <Image
        className={styles.projectImage}
        src={props.projectImage || ''}
        alt='project bg'
        width={426}
        height={200}></Image>
    </div>
  )
}
