import clsx from 'clsx';
import React from 'react';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
const montserrat = Montserrat({ weight: ['100', ], subsets: ["latin"] });
const Projects = () => {
  return (
    <section id='projects' className='h-full projects text-center'>
      <h1 className={clsx(,"")} >Some of my projects</h1>
      <div className='grid grid-cols-3 gap-3 px-2'>
        <div>
          <div className=''>
            <img className='' src='/Dico.png' alt='project' />
          </div>
          <h1 className={clsx('bg-gray-600 py-2')}>Project</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
