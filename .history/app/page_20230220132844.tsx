import { clsx } from 'clsx';
import { Inter, Montserrat, Open_Sans } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const glock = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='h-screen landing flex items-center justify-center '>
      <div>
        <h1 className={clsx(openSans.className, 'text-5xl font-bold')}>
          Hi, I'm Jason
        </h1>
        <h3 className='text-center text-red-700 font-bold'>A web developer</h3>
      </div>
    </main>
  );
}
