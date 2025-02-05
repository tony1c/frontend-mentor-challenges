import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type PlanContextType = {
  plan: 'monthly' | 'yearly';
  setPlan: Dispatch<SetStateAction<'monthly' | 'yearly'>>;
  togglePlan: () => void;
};

const PlanContext = createContext<PlanContextType>({
  plan: 'monthly',
  setPlan: () => {},
  togglePlan: () => {},
});

export const PlanProvider = ({ children }: PropsWithChildren) => {
  const [plan, setPlan] = useState<'monthly' | 'yearly'>('monthly');

  const togglePlan = () => {
    setPlan(prevPlan => (prevPlan === 'monthly' ? 'yearly' : 'monthly'));
  };

  const value = {
    plan,
    setPlan,
    togglePlan,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error('Context must be used within a context provider');
  }
  return context;
};
