import Image from 'next/image'

import '@/styles/globals.scss'

export default function Home() {
  return <main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <h1 className='text-white opacity-50 select-none text-4xl'>
      git status <br />
      git add -A <br />
      git commit -am <br />
      git checkout master <br />
      git checkout -B bersival
    </h1>
  </main>
}
