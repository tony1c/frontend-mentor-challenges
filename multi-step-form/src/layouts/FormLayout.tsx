import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
  description: string;
}

export const FormLayout = ({ ...props }: Props) => {
  return (
    <div className='mx-auto h-[376px] max-w-[343px] -translate-y-[51px] rounded-[10px] bg-white px-6 py-8'>
      <div className='flex flex-col gap-[9px]'>
        <h1 className='text-[24px] font-bold'>{props.title}</h1>
        <p className='body-l text-grey'>{props.description}</p>
      </div>
      {props.children}
    </div>
  );
};
