interface Props {
  Icon: () => JSX.Element;
  text: string;
}

export const UserInfo = ({ Icon, text }: Props) => {
  const isLink = text?.includes('https://');

  if (!text) {
    return (
      <div className='flex gap-[19px] opacity-50'>
        <Icon />
        <span className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[13px]'>
          Not Avaiable
        </span>
      </div>
    );
  }

  return (
    <div className='flex gap-[19px]'>
      <Icon />
      {!isLink ? (
        <span className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[13px]'>
          {text}
        </span>
      ) : (
        <a
          href={text}
          className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[13px]'>
          {text}
        </a>
      )}
    </div>
  );
};
