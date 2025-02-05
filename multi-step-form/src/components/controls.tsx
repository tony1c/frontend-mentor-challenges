import { useStep } from '../contexts/StepContext';
import { cn } from '../utils/cn';

export const Controls = () => {
  const { step, nextStep, prevStep } = useStep();

  const backBtn: boolean = step !== 1;

  return (
    <div className='mt-[120px] flex h-[72px] bg-white p-4'>
      {backBtn && (
        <button
          onClick={prevStep}
          className='text-grey text-[14px] font-medium'>
          Go Back
        </button>
      )}
      <button
        onClick={nextStep}
        className={cn(
          'bg-denim ml-auto h-10 w-[97px] cursor-pointer rounded-[4px] text-[14px] font-medium text-white',
          { 'bg-purple': step === 4 },
        )}>
        <span>{step < 4 ? 'Next Step' : 'Confirm'}</span>
      </button>
    </div>
  );
};
