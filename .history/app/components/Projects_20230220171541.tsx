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
    <section id='projects' className='h-full projects text-center'>
      <h1 className={clsx(openSans.className, 'text-3xl py-20 underline')}>Projects</h1>
      <div className='grid grid-cols-3 gap-3 px-20'>
        <div>
          <Link href={""}>
            <div className=''>
              <img className='' src='/Dico.png' alt='project' />
            </div>
            <h1 className={clsx(montserrat.className, 'bg-gray-600 py-2')}>
              Project
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
