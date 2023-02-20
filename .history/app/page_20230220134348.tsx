import { clsx } from 'clsx';
import { Inter, Montserrat, Open_Sans, Roboto } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['cyrillic'], weight: ["100", "300", "400"] });

export default function Home() {
  return (
    <main className='h-screen landing flex items-center justify-center '>
      <div>
        <h1 className={clsx(openSans.className, 'text-5xl font-bold pb-')}>
          Hi, I'm Jason
        </h1>
        <h3
          className={clsx(
            roboto.className,
            'text-center font-italic text-red-700 text-2xl font-bold'
          )}
        >
          A web developer
        </h3>
      </div>
    </main>
  );
}
