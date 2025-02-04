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
  dec: () => void;
};

const StepContext = createContext<Step>({
  step: 1,
  setStep: () => {},
  inc: () => {},
  dec: () => {},
});

export const StepProvider = ({ children }: PropsWithChildren) => {
  const [step, setStep] = useState<StepValue>(1);

  function inc() {
    setStep(prevStep =>
      prevStep < 4 ? ((prevStep + 1) as StepValue) : prevStep,
    );
  }

  function dec() {
    setStep(prevStep => (prevStep -= 1) as StepValue);
  }

  const value = {
    step,
    setStep,
    inc,
    dec,
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
