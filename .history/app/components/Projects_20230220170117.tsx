import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className='h-full projects text-center'>
      <h1>Some of my projects</h1>
      <div className='grid grid-cols-3 gap-3 px-2'>
        <div>
          <div className=''>
            <img className='' src='/Dico.png' alt='project' />
          </div>
          <h1 className='bg-gra'>Project</h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
