import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className='w-full bg-c-gradient-01 font-inconsolata text-preset-1'>
      Hello from app
      <div className='size-300 rounded-full bg-c-neutral-500'></div>
    </div>
  );
}
