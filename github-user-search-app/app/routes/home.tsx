import { ThemeSwitcher } from '~/components/themeSwitcher';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className='h-screen bg-0079FF dark:bg-2B3442'>
      <ThemeSwitcher />
    </div>
  );
}
