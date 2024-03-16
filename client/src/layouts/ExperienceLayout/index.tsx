// 'use client' remains at the top if you're using Next.js 12.2 or later for client-side components
'use client'

import '@/styles/globals.scss'
import styles from './styles.module.scss'

import {H1} from '@/ui/typography/H1'
import {ProjectCard} from '@/components/ProjectCard'
import GithubIcon from '@/sources/icons/Github'
import {Button} from '@/ui/Button'

interface Project {
  gradientBg: string
  projectImage: string
  projectHeader: string
  jobTitle: string
  mainStack: string[]
}

const projects: Project[] = [
  {
    gradientBg: '/gradients/projects/card.png',
    projectImage: '/miniCardImages/e5.png',
    projectHeader: 'Element-5',
    jobTitle: 'Frontend developer',
    mainStack: ['TS', 'NextJS'],
  },
  {
    gradientBg: '/gradients/projects/card-1.png',
    projectImage: '/miniCardImages/btech.png',
    projectHeader: 'bersival.tech',
    jobTitle: 'Frontend developer',
    mainStack: ['TS', 'NextJS'],
  },
  {
    gradientBg: '/gradients/projects/card-2.png',
    projectImage: '/miniCardImages/chaqi.png',
    projectHeader: 'Cha Qi',
    jobTitle: 'Frontend developer',
    mainStack: ['TS', 'NextJS'],
  },
  {
    gradientBg: '/gradients/projects/card-3.png',
    projectImage: '/miniCardImages/hackwagon.png',
    projectHeader: 'HackWagon',
    jobTitle: 'Frontend developer',
    mainStack: ['TS', 'NextJS'],
  },
  {
    gradientBg: '/gradients/projects/card-4.png',
    projectImage: '/miniCardImages/evraz.png',
    projectHeader: 'Evraz',
    jobTitle: 'Frontend developer',
    mainStack: ['TS', 'NextJS'],
  },
]

export default function ExperienceLayout() {
  return (
    <section
      id='experience'
      className={styles.experienceSection}>
      <H1 className='text-white mb-14'>Experience</H1>
      <div className={`${styles.projectsBlock} grid w-full`}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
        <Button className={styles.githubCard}>
          <GithubIcon />
        </Button>
      </div>
    </section>
  )
}
