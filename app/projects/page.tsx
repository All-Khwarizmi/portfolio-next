'use client';
import { Open_Sans } from '@next/font/google';
import clsx from 'clsx';
import { useState} from 'react';
import ProjectCard from '../components/ProjectCard';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';

const openSans = Open_Sans({
  weight: ['300', '400'],
  subsets: ['latin'],
});

type Projects = {
  gif: string
  name: string
  techno: string
  href: string
  docs: string
}

const page= () => {
  const [projects, setProjects] = useState<Projects[]>([
    {
      gif: './dico-gif.gif',
      name: 'Dico',
      techno: 'next',
      href: 'https://dico-uno.vercel.app/',
      docs: 'https://github.com/All-Khwarizmi/Dico',
    },
    {
      gif: 'https://quizoo-espanol.vercel.app/',
      name: 'QuizoO',
      techno: 'next',
      href: 'https://quizoo-espanol.vercel.app/',
      docs: 'https://github.com/All-Khwarizmi/Quiz-Sanity',
    },
    {
      gif: 'https://recall-api.vercel.app/',
      name: 'Recal',
      techno: 'next',
      href: 'https://recall-api.vercel.app/',
      docs: 'https://github.com/All-Khwarizmi/-Recall-API-',
    },
    {
      gif: './gites-gif.gif',
      name: 'Gîtes Mon Trésor',
      docs: 'https://github.com/All-Khwarizmi/gites-v2',
      techno: 'next',
      href: 'https://gites-mon-tresor-guadeloupe.com/',
    },
    {
      gif: './quizoo-gif.gif',
      name: 'QuizoO',
      techno: 'react',
      href: 'https://dapper-belekoy-aa000e.netlify.app/',
      docs: 'https://github.com/All-Khwarizmi/QuizoO',
    },
    {
      gif: 'https://codice-it.vercel.app/decks',
      name: 'Codice',
      techno: 'next',
      href: 'https://codice-it.vercel.app/decks',
      docs: 'https://github.com/All-Khwarizmi/codice',
    },
    {
      gif: 'https://all-khwarizmi.github.io/RandomQuote2/',
      name: 'Random Quote',
      techno: 'vanilla',
      href: 'https://all-khwarizmi.github.io/RandomQuote2/',
      docs: 'https://github.com/All-Khwarizmi/RandomQuote2',
    },
    {
      gif: 'https://all-khwarizmi.github.io/random-react/',
      name: 'Random Quote',
      techno: 'react',
      href: 'https://all-khwarizmi.github.io/random-react/',
      docs: 'https://github.com/All-Khwarizmi/random-react',
    },
    {
      gif: 'https://main--incomparable-froyo-cd9602.netlify.app/',
      name: 'Markdown Viewer',
      techno: 'react',
      href: 'https://main--incomparable-froyo-cd9602.netlify.app/',
      docs: 'https://github.com/All-Khwarizmi/Markdown-Viewer',
    },
  ]);
  const [query, setQuery] = useState('all');

  let filteredProjects = projects.filter((project) => project.techno === query);

  const handleCheck = (e: any) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <main id='projects-page' className=' min-h-screen  projects text-center'>
      <h1
        className={clsx(
          openSans.className,
          'text-5xl grid content-center py-20 font-bold'
        )}
      >
        Projects
      </h1>
      <form
        onChange={(e) => handleCheck(e)}
        className='flex flex-row gap-5 p-5 justify-center'
      >
        <input defaultChecked type='radio' id='all' name='techno' value='all' />
        <label htmlFor='all'> All</label>
        <br></br>
        <input type='radio' id='vanilla' name='techno' value='vanilla' />
        <label htmlFor='vanilla'> Vanilla</label>
        <br></br>
        <input type='radio' id='react' name='techno' value='react' />
        <label htmlFor='react'> React</label>
        <br></br>
        <input type='radio' id='next' name='techno' value='next' />
        <label htmlFor='next'> Next</label>
        <br></br>
      </form>
      <div className='flex min-h-[100%] flex-col items-center justify-between lg:flex-row lg:justify-center flex-wrap gap-5 lg:gap-20 px-2'>
        {query === 'all' &&
          projects.map((project) => {
            return (
              <div key={uuidv4()} className=' '>
                <ProjectCard
                  url={project.href}
                  name={project.name}
                  docs={project.docs}
                />
              </div>
            );
          })}
        {query !== 'all' &&
          filteredProjects.map((project) => {
            return (
              <div key={uuidv4()} className=' '>
                <ProjectCard
                  url={project.href}
                  name={project.name}
                  docs={project.docs}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </main>
  );
};

export default page;
