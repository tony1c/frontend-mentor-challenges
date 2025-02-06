import { useStep } from '../../contexts/StepContext';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

export const ViewStep = () => {
  const { step } = useStep();

  switch (step) {
    case 1: {
      return <Step1 />;
    }

    case 2: {
      return <Step2 />;
    }

    case 3: {
      return <Step3 />;
    }
  }
};
