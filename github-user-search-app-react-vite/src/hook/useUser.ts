import { useContext } from 'react';
import UserContext from '../context/userProvider';

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Context must be used within a context provider');
  }

  return context;
};
