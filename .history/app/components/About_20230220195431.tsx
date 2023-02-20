import me from '../public.me.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-screen about'>
        <Image src={me} alt='Image of me' >

        </Image>
    </div>
  )
}

export default About