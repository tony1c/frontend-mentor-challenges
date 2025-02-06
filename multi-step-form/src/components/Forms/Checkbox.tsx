import { useState } from 'react';
import { cn } from '../../utils/cn';
import { Plan, usePlan } from '../../contexts/PlanContext';

type AddOn = 'online-service' | 'larger-storage' | 'customizable-profile';

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { plan } = usePlan();

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const getPrice = (addOn: AddOn, plan: Plan) => {
    if (plan === 'monthly') {
      switch (addOn) {
        case 'online-service': {
          return '1/mo';
        }
      }
    }
  };

  const price = getPrice('online-service', plan);
  console.log(price);

  return (
    <div
      className={cn(
        'border-light-grey mt-[22px] flex h-[62px] items-center justify-between rounded-[8px] border px-4',
        { 'border-purple bg-very-light-grey': isChecked },
      )}>
      <div className='flex items-center gap-4'>
        <input onChange={handleIsChecked} type='checkbox' />
        <div className='flex flex-col gap-[3px]'>
          <span className='text-denim text-[14px] font-medium'>
            Online service
          </span>
          <span className='text-grey text-[12px] leading-[20px]'>
            Access to multiplayer games
          </span>
        </div>
      </div>
      <span className='text-purple text-[12px] leading-[20px]'>+$1/mo</span>
    </div>
  );
};
