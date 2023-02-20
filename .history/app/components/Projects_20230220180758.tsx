import clsx from 'clsx';
import React from 'react';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
import Link from 'next/link';
const montserrat = Montserrat({ weight: ['100',"300", "400" ], subsets: ["latin"] });
const openSans = Open_Sans({
  weight: [ '300', '400'],
  subsets: ['latin'],
});
const Projects = () => {
  return (
    <section id='projects' className='min-h-[100%]  projects text-center'>
      <h1
        className={clsx(
          openSans.className,
          'text-3xl grid content-center py-20 underline'
        )}
      >
        Projects
      </h1>
      <div className='flex min-h-[100%] flex-col items-center justify-between lg:flex-row lg:justify-center flex-wrap  px-2'>
        <div className='p-5 w-[80%] lg:w-[30%] lg:h-96'>
          <Link className='' href={''}>
            <div className=''>
              <img
                className='rounded rounded-bl-none rounded-br-none'
                src='/Dico.png'
                alt='project'
              />
            </div>
            <h1
              className={clsx(montserrat.className, 'bg-gray-600 py-2 font-')}
            >
              Project
            </h1>
          </Link>
        </div>
        <div className='p-5 w-[80%]  lg:w-[30%] lg:h-96'>
          <Link className='' href={''}>
            <div className=''>
              <img
                className='rounded rounded-bl-none rounded-br-none'
                src='/Dico.png'
                alt='project'
              />
            </div>
            <h1
              className={clsx(montserrat.className, 'bg-gray-600 py-2 font-')}
            >
              Project
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
