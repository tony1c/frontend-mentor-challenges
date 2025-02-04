import { StepValue, useStep } from '../contexts/StepContext';
import { cn } from '../utils/cn';

export const Steps = () => {
  const { step: currentStep } = useStep();

  const steps = Array.from({ length: 4 }, (_, i) => i + 1) as StepValue[];

  return (
    <ul className='flex gap-4 justify-center mt-[32px]'>
      {steps.map((step, i) => (
        <li
          key={i}
          className={cn(
            'size-[33px] rounded-full flex items-center justify-center',
            { 'bg-sky-blue text-denim': step === currentStep },
            { 'text-white border-white border': step !== currentStep }
          )}>
          {step}
        </li>
      ))}
    </ul>
  );
};
