import { usePlan } from '../../contexts/PlanContext';
import { cn } from '../../utils/cn';

export const TogglePlan = () => {
  const { plan, togglePlan } = usePlan();

  const getTextStyle = (targetPlan: 'monthly' | 'yearly') => {
    return cn('text-[14px]', plan === targetPlan ? 'text-denim' : 'text-grey');
  };

  return (
    <div className='bg-very-light-grey flex h-12 items-center justify-center gap-6 rounded-[8px]'>
      <span className={getTextStyle('monthly')}>Monthly</span>
      <button
        onClick={togglePlan}
        className={cn(
          'bg-denim relative flex h-5 w-[38px] items-center rounded-[10px] px-1',
          { 'justify-end': plan === 'yearly' },
        )}>
        <div className='absolute size-3 rounded-full bg-white'></div>
      </button>
      <span className={getTextStyle('yearly')}>Yearly</span>
    </div>
  );
};
