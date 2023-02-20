
import { clsx } from 'clsx';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['cyrillic'], weight: ['100', '300', '400'] });

const Landing = () => {
  return (
    <div className='h-full relative landing flex items-center justify-center '>
      <div>
        <h1 className={clsx(openSans.className, 'text-5xl font-bold pb-3')}>
          Hi, I'm Jason
        </h1>
        <h3
          className={clsx(
            roboto.className,
            'text-center italic text-red-700 text-2xl font-bold'
          )}
        >
          A web developer
        </h3>
      </div>
    </div>
  );
};

export default Landing;
