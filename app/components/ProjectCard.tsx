import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import Iframe from 'react-iframe';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';


const montserrat = Montserrat({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
});

type AppProps = {
  url: string;
  name: string;
  docs: string
};
const ProjectCard = ({url, name, docs }: AppProps) => {
    const [windowWitdh, setWindowWitdh] = useState<number>(window.innerWidth);
    let winWidthVar = window.innerWidth;
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWitdh(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
   
    console.log('windowWitdh', winWidthVar);
  return (
    <div className=''>
      <Iframe url={url} name={name} height='500px' width={windowWitdh < 600 ? "375px": "500px"}></Iframe>

      <div className='flex justify-center project-caption'>
        <Link
          target={'_blank'}
          className={clsx(
            montserrat.className,
            ' justify-center items-center w-full flex p-5 h-full '
          )}
          href={url}
        >
          <h1>{name}</h1>
        </Link>
        <Link href={docs} target={'_blank'}>
          <h1 className={clsx(montserrat.className, ' p-5 ')}>
            <AiOutlineGithub className='text-2xl' />
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard