'use client';

import clsx from 'clsx';
import Iframe from 'react-iframe';
import { Montserrat} from '@next/font/google';
import Link from 'next/link';
import { AiOutlineGithub } from 'react-icons/ai';

const montserrat = Montserrat({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
});

type AppProps = {
  url: string;
  name: string;
  docs: string;
};
const ProjectCard = ({ url, name, docs }: AppProps) => {
  return (
    <div className=''>
      <Iframe
        url={url}
        name={name}
        height='500px'
        width={
          typeof window !== 'undefined'
            ? window.innerWidth < 600
              ? '375px'
              : '500px'
            : '375px'
        }
      ></Iframe>

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
};

export default ProjectCard;
