interface Props {
  title: string;
  value: number;
}

export const UserBoxInfo = ({ title, value }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[11px]'>
        {title}
      </span>
      <span className='text-[16px] font-bold'>{value}</span>
    </div>
  );
};
