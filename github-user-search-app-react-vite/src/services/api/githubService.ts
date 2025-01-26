import { Octokit } from 'octokit';
import { User } from '../../types/user';

export const fetchGithubUserData = async (username: string) => {
  const cacheKey = `github-user-${username.toLowerCase()}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    console.log('Returning cached data for:', username);
    return JSON.parse(cachedData) as User;
  }

  const octokit = new Octokit({});

  try {
    const rateLimitData = await octokit.request('GET /rate_limit');
    console.log(rateLimitData.data);
    const userData = await octokit.request('GET /users/{username}', {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    localStorage.setItem(cacheKey, JSON.stringify(userData.data));
    return userData.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw new Error('Failed to fetch GitHub user data.');
  }
};
