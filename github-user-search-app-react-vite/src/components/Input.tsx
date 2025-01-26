import { FormEvent, useEffect, useState } from 'react';
import iconSearch from '../assets/icon-search.svg';
import { useUser } from '../hook/useUser';
import { fetchGithubUserData } from '../services/api/githubService';

export const Input = () => {
  const { setUser } = useUser();
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const setInitialUser = async () => {
      const initialUser = await fetchGithubUserData('octocat');
      setUser(initialUser);
    };

    setInitialUser();
  }, [setUser]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) {
      console.log('no username');
      return;
    }

    const userData = await fetchGithubUserData(username);
    console.log(userData);
    setUser(userData);
  };

  return (
    <div className='bg-c-light-FEFEFE dark:bg-c-dark-1E2A47 mt-[36px] flex h-[60px] w-full items-center justify-evenly rounded-[15px] shadow-lg'>
      <img src={iconSearch} alt='Search Icon' />
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor='username'>
          <input
            type='text'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Search github username...'
            className='dark:text-c-dark-FFF w-[184px] cursor-pointer border-transparent text-[13px] leading-[25px] outline-none'
          />
        </label>
        <button
          type='submit'
          className='bg-c-0079FF text-c-dark-FFF h-[46px] w-[84px] rounded-[10px]'>
          Search
        </button>
      </form>
    </div>
  );
};
