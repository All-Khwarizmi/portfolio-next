import clsx from "clsx";

const About = () => {
  return (
    <div id='timeline' className='min-h-screen w-screen about'>
      <div className="flex items-center">
        <h1 className={clsx('text-5xl grid content-center py-20 font-bold')}>
          Timeline
        </h1>
      </div>
      <div className=' grid place-items-center lg:block rounded-xl lg:w-full'>
        <div className='flex w-[100%] pt-20 justify-center items-center'>
          <iframe
            className='w-[95%] lg:w-full rounded'
            src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Z_3iH_XE0HMc2072NU4qledD9myxvFhiShV8EcloG3I&font=Default&lang=en&initial_zoom=2&height=650'
            width='100%'
            height='650'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
