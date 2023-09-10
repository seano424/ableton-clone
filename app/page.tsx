import clsx from 'clsx';
import Navbar from './components/Navbar';
import { Jost } from 'next/font/google';

const jost = Jost({
  display: 'swap',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main
      className={clsx(
        'container bg-white',
        jost.className
      )}
    >
      <Navbar />
    </main>
  );
}
