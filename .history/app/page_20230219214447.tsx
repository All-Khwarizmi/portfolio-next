
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen landing flex items-center justify-center '>
      <div>
<h1 className='text-5xl'>Hi, I'm Jason</h1>
<h3 className='text-center '>A web developer</h3>
      </div>

    </main>
  )
}
