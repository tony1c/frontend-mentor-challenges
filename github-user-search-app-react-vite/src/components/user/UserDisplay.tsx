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
    <div className='bg-c-light-FEFEFE dark:bg-c-dark-1E2A47 dark:text-c-dark-FFF mt-4 min-h-[501px] w-full rounded-[15px] px-[24px] py-[32px] shadow-lg md:min-h-[481px] lg:min-h-[444px]'>
      {user && (
        <div>
          <div className='flex gap-[19px]'>
            <img src={user.avatar_url} className='size-[70px] rounded-full' />

            <div className='flex flex-col'>
              <span className='text-[16px] font-bold'>{user.name}</span>
              <span className='text-c-0079FF text-[13px] font-bold'>
                @{user.login}
              </span>
              <span className='text-c-light-697C9A dark:text-c-dark-FFF text-[13px]'>
                Joined {formatDate(user.created_at)}
              </span>
            </div>
          </div>

          <div className='mt-[33px]'>
            <p className='text-c-light-4B6A9B dark:text-c-dark-FFF text-[13px] leading-[25px]'>
              {user.bio ??
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
            </p>
          </div>

          <div className='bg-c-light-F6F8FF dark:bg-c-dark-141D2F mt-[23px] flex justify-evenly rounded-[10px] px-[14px] py-[18px] text-center md:justify-start md:gap-[99px] md:text-start'>
            <UserBoxInfo title='Repos' value={user.public_repos} />
            <UserBoxInfo title='Followers' value={user.followers} />
            <UserBoxInfo title='Following' value={user.following} />
          </div>

          <div className='mt-6 max-w-[429px] justify-between space-y-4 md:mt-[30px] md:flex'>
            <div className='space-y-4'>
              <UserInfo Icon={IconLocation} text={user.location} />
              <UserInfo Icon={IconWebsite} text={user.blog} />
            </div>
            <div className='space-y-4'>
              <UserInfo Icon={IconTwitter} text={user.twitter_username} />
              <UserInfo Icon={IconCompany} text={user.company} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
