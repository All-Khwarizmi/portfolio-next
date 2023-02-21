"use client"
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';


const montserrat = Montserrat({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
});
const openSans = Open_Sans({
  weight: ['300', '400'],
  subsets: ['latin'],
});

const page = () => {
    const [projects, setProjects] = useState([
      {
        project: './dico-gif.gif',
        techno: 'next',
      },
      {
        project: './gites-gif.gif',
        techno: 'next',
      },
      {
        project: './quizoo-gif.gif',
        techno: 'react',
      },
    ]);
    const [query, setQuery] = useState("")

    const filteredProjects = projects.filter((project) => project.techno === query )
    const handleCheck = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value);
    };

  return (
    <main id='projects-page' className='min-h-[100%]  projects text-center'>
      <h1
        className={clsx(
          openSans.className,
          'text-5xl grid content-center py-20 font-bold'
        )}
      >
        Projects
      </h1>
      <form> 
        <input type="checkbox" id="all" name="all" value="all" onChange={(e) => handleCheck(e) } />
<label htmlFor="all"> All</label><br></br>
        <input type="checkbox" id="vanilla" name="vanilla" value="vanilla" onChange={(e) => handleCheck(e) } />
<label htmlFor="all"> All</label><br></br>
        <input type="checkbox" id="all" name="all" value="all" onChange={(e) => handleCheck(e) } />
<label htmlFor="all"> All</label><br></br>
        <input type="checkbox" id="all" name="all" value="all" onChange={(e) => handleCheck(e) } />
<label htmlFor="all"> All</label><br></br>
      </form>
      <div className='flex min-h-[100%] flex-col items-center justify-between lg:flex-row lg:justify-center flex-wrap  px-2'>
        <div className='p-5  w-[100%] lg:w-[30%] lg:h-96'>
          <Link
            className=''
            target={'_blank'}
            href={'https://dico-ochre.vercel.app/'}
          >
            <div className=''>
              <img
                className='rounded rounded-bl-none rounded-br-none'
                src='./dico-gif.gif'
                alt='project'
              />
            </div>
            <h1 className={clsx(montserrat.className, 'project-caption py-5 ')}>
              Dico
            </h1>
          </Link>
        </div>
        <div className='p-5  w-[100%] lg:w-[30%] lg:h-96'>
          <Link
            className=''
            target={'_blank'}
            href={'https://dico-ochre.vercel.app/'}
          >
            <div className=''>
              <img
                className='rounded  rounded-bl-none rounded-br-none'
                src='./gites-gif.gif'
                alt='project'
              />
            </div>
            <div className='h-20'>
              <h1
                className={clsx(montserrat.className, 'project-caption py-5 ')}
              >
                Gîtes Mon Trésor
              </h1>
            </div>
          </Link>
        </div>
        <div className='p-5  w-[100%] lg:w-[30%] lg:h-96'>
          <Link
            className=''
            target={'_blank'}
            href={'https://dico-ochre.vercel.app/'}
          >
            <div className=''>
              <img
                className='rounded max-h-96 rounded-bl-none rounded-br-none'
                src='./quizoo-gif.gif'
                alt='project'
              />
            </div>
            <div className='h-20'>
              <h1
                className={clsx(montserrat.className, 'project-caption py-5 ')}
              >
                QuizoO
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
