import clsx from 'clsx';
import React from 'react';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
const montserrat = Montserrat({ weight: ['100', ], subsets: ["latin"] });
const Projects = () => {
  return (
    <section id='projects' className='h-full projects text-center'>
      <h1 className={clsx(montserrat.className, '')}>Some of my projects</h1>
      <div className='grid grid-cols-3 gap-3 px-2'>
        <div>
          <L
        </div>
      </div>
    </section>
  );
};

export default Projects;
