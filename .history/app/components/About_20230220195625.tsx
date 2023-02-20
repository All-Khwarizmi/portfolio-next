import me from 'public/me.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-screen about'>
        <div className='h-'>

        <Image src={me} alt='Picture of Jason Suárez' />
        </div>

        
    </div>
  )
}

export default About