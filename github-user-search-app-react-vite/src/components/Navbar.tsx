import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <a
        href='/'
        className='dark:text-c-dark-FFF text-[26px] font-bold text-[#222731]'>
        devfinder
      </a>
      <ThemeToggle />
    </nav>
  );
};
