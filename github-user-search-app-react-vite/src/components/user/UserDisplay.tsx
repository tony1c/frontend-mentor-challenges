import { useUser } from '../../hook/useUser';
import { formatDate } from '../../utils/formatDate';
import { UserInfo } from './UserInfo';

import { IconCompany } from '../icon/IconCompany';
import { IconLocation } from '../icon/IconLocation';
import { IconTwitter } from '../icon/IconTwitter';
import { IconWebsite } from '../icon/IconWebsite';
import { UserBoxInfo } from './UserBoxInfo';

export const UserDisplay = () => {
  const { user } = useUser();

  return (
    <div className='bg-c-light-FEFEFE dark:bg-c-dark-1E2A47 dark:text-c-dark-FFF mt-4 min-h-[501.5px] w-full rounded-[15px] px-[24px] py-[32px] shadow-lg'>
      {user && (
        <div>
          <div className='flex gap-[19px]'>
            <img
              src={user.data.avatar_url}
              className='size-[70px] rounded-full'
            />

            <div className='flex flex-col'>
              <span className='text-[16px] font-bold'>{user.data.name}</span>
              <span className='text-c-0079FF text-[13px] font-bold'>
                @{user.data.login}
              </span>
              <span className='text-c-light-697C9A dark:text-c-dark-FFF text-[13px]'>
                Joined {formatDate(user.data.created_at)}
              </span>
            </div>
          </div>

          <div className='mt-[33px]'>
            <p className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[13px] leading-[25px]'>
              {user.data.bio ??
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
            </p>
          </div>

          <div className='bg-c-light-F6F8FF dark:bg-c-dark-141D2F mt-[23px] flex justify-evenly rounded-[10px] px-[14px] py-[18px] text-center'>
            <UserBoxInfo title='Repos' value={user.data.public_repos} />
            <UserBoxInfo title='Followers' value={user.data.followers} />
            <UserBoxInfo title='Following' value={user.data.following} />
          </div>

          <div className='mt-6 space-y-4'>
            <UserInfo Icon={IconLocation} text={user.data.location} />
            <UserInfo Icon={IconWebsite} text={user.data.blog} />
            <UserInfo Icon={IconTwitter} text={user.data.twitter_username} />
            <UserInfo Icon={IconCompany} text={user.data.company} />
          </div>
        </div>
      )}
    </div>
  );
};
