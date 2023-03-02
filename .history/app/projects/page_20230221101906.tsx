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
        gif: './dico-gif.gif',
        techno: 'next',
        href: 'https://dico-ochre.vercel.app/',
      },
      {
        gif: './gites-gif.gif',
        techno: 'next',
        href: 'https://gites-gamma.vercel.app',
      },
      {
        gif: './quizoo-gif.gif',
        techno: 'react',
        href: 'https://dapper-belekoy-aa000e.netlify.app/',
      },
    ]);
    const [query, setQuery] = useState("")

    const filteredProjects = projects.filter((project) => project.techno === query )
    const handleCheck = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value);
    };

  return (
    <main id='projects-page' className='h-screen projects text-center'>
      <h1
        className={clsx(
          openSans.className,
          'text-5xl grid content-center py-20 font-bold'
        )}
      >
        Projects
      </h1>
      <form> 
        <input checked type="checkbox" id="all" name="all" value="all" onChange={(e) => handleCheck(e) } />
<label htmlFor="all"> All</label><br></br>
        <input type="checkbox" id="vanilla" name="vanilla" value="vanilla" onChange={(e) => handleCheck(e) } />
<label htmlFor="vanilla"> Vanilla</label><br></br>
        <input type="checkbox" id="react" name="react" value="react" onChange={(e) => handleCheck(e) } />
<label htmlFor="react"> React</label><br></br>
        <input type="checkbox" id="next" name="next" value="next" onChange={(e) => handleCheck(e) } />
<label htmlFor="next"> Next</label><br></br>
      </form>
      <div className='flex min-h-[100%] flex-col items-center justify-between lg:flex-row lg:justify-center flex-wrap  px-2'>
        {
            filteredProjects.map(project => {
                return (
                  <div className='p-5  w-[100%] lg:w-[30%] lg:h-96'>
                    <Link
                      className=''
                      target={'_blank'}
                      href={` ${project.href} `}
                    >
                      <div className=''>
                        <img
                          className='rounded rounded-bl-none rounded-br-none'
                          src={}
                          alt='project'
                        />
                      </div>
                      <h1
                        className={clsx(
                          montserrat.className,
                          'project-caption py-5 '
                        )}
                      >
                        Dico
                      </h1>
                    </Link>
                  </div>
                );
            })
        }
    
      </div>
    </main>
  );
};

export default page;