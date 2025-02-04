import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type StepValue = 1 | 2 | 3 | 4;

type Step = {
  step: StepValue;
  setStep: Dispatch<SetStateAction<1 | 2 | 3 | 4>>;
  inc: () => void;
};

const StepContext = createContext<Step>({
  step: 1,
  setStep: () => {},
  inc: () => {},
});

export const StepProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<StepValue>(1);

  function inc() {
    setStep(prevStep =>
      prevStep < 4 ? ((prevStep + 1) as StepValue) : prevStep
    );
  }

  const value = {
    step,
    setStep,
    inc,
  };

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStep = () => {
  const context = useContext(StepContext);

  if (!context) {
    throw new Error('Context must be used within a context provider');
  }

  return context;
};
