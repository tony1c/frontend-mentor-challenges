import {
  createContext,
  Dispatch,
  type PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/user';

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  error: boolean | null;
  setError: Dispatch<SetStateAction<boolean | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<boolean | null>(null);

  const value = {
    user,
    setUser,
    error,
    setError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
