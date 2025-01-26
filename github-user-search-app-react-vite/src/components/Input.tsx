import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import iconSearch from '../assets/icon-search.svg';
import { useUser } from '../hook/useUser';
import { fetchGithubUserData } from '../services/api/githubService';
import { User } from '../types/user';

export const Input = () => {
  const { error, setError, setUser } = useUser();
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const setInitialUser = async () => {
      const initialUser = await fetchGithubUserData('octocat');
      setUser(initialUser as User);
    };

    setInitialUser();
  }, [setUser]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      return;
    }

    try {
      const userData = await fetchGithubUserData(username);
      console.log(userData);

      setUser(userData as User);
    } catch (err) {
      setError(true);
      console.error(err, 'err');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setUsername(e.target.value);
  };

  return (
    <div className='bg-c-light-FEFEFE dark:bg-c-dark-1E2A47 mt-[36px] flex h-[60px] w-full items-center rounded-[15px] shadow-lg'>
      <form
        method='post'
        onSubmit={handleSubmit}
        className='relative flex w-full items-center justify-between pr-[9px] pl-4 md:pl-8'>
        <div className='flex gap-[8.95px] md:gap-[23.94px]'>
          <img src={iconSearch} alt='Search Icon' />
          <label htmlFor='username'>
            <input
              type='text'
              name='username'
              value={username}
              onChange={handleInputChange}
              placeholder='Search github username...'
              className='dark:text-c-dark-FFF w-[183px] cursor-pointer border-transparent text-[13px] leading-[25px] outline-none md:w-[254px]'
            />
          </label>
          {error && (
            <span className='absolute right-27 font-bold text-[#F74646]'>
              No results
            </span>
          )}
        </div>
        <button
          type='submit'
          className='bg-c-0079FF text-c-dark-FFF h-[46px] w-[84px] cursor-pointer rounded-[10px] transition-colors duration-300 hover:bg-[#60ABFF]'>
          Search
        </button>
      </form>
    </div>
  );
};
