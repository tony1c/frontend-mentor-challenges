import { Octokit } from 'octokit';
import { User } from '../../types/user';

export const fetchGithubUserData = async (username: string) => {
  const octokit = new Octokit({
    auth: import.meta.env.GITHUB_TOKEN,
  });

  try {
    const userData = (await octokit.request('GET /users/{username}', {
      username: username,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })) as User;

    return userData;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw new Error('Failed to fetch GitHub user data.');
  }
};
