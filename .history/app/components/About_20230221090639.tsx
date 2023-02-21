import me from 'public/me.png'
import Image from 'next/image'

const About = () => {
  return (
    <div className='h-screen w-screen about'>
      <div className='h-60 grid place-items-center lg:block rounded-xl lg:w-full'>
        {/*    <Image className='rounded-xl' src={me} alt='Picture of Jason Suárez' /> */}
        <div className='flex w-[90%]  justify-center items-center'>
          <iframe
            className='w-[95%] rounded'
            src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Z_3iH_XE0HMc2072NU4qledD9myxvFhiShV8EcloG3I&font=Default&lang=en&initial_zoom=2&height=650'
            width='100%'
            height='650'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default About