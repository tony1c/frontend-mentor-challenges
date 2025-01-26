import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <h1>
        <a
          href='/'
          className='dark:text-c-dark-FFF text-[26px] font-bold text-[#222731]'>
          devfinder
        </a>
      </h1>
      <ThemeToggle />
    </nav>
  );
};
