import me from 'public/me.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-screen about'>
      <div className='h-60  rounded-xl w-96'>
        {/*    <Image className='rounded-xl' src={me} alt='Picture of Jason Suárez' /> */}
        <iframe
          src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Z_3iH_XE0HMc2072NU4qledD9myxvFhiShV8EcloG3I&font=Default&lang=en&initial_zoom=2&height=650'
          width='100%'
          height='650'
          webkitallowfullscreen={true}
          mozallowfullscreen
          allowfullscreen
          frameborder='0'
        ></iframe>
      </div>
    </div>
  );
}

export default About