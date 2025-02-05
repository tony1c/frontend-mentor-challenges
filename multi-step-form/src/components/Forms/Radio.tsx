import { ChangeEvent, FocusEvent, forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface RadioProps {
  icon: string;
  label: string;
  price: string;
  checked: boolean;
  value: string;
  handleChecked: () => void;
  // Add register props
  name: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ ...props }, ref) => {
    return (
      <div
        onClick={props.handleChecked}
        className={cn(
          'border-light-grey flex h-[77px] w-full cursor-pointer items-center rounded-[10px] border',
          { 'border-purple bg-very-light-grey': props.checked },
        )}>
        <div className='flex gap-3.5 pl-4'>
          <img src={props.icon} />
          <div className='flex flex-col'>
            <span className='text-denim text-[16px] font-medium'>
              {props.label}
            </span>
            <span className='text-grey text-[14px] leading-[20px]'>
              {props.price}
            </span>
            <input
              type='radio'
              value={props.value}
              checked={props.checked}
              readOnly
              hidden
              name={props.name}
              onChange={props.onChange}
              onBlur={props.onBlur}
              ref={ref}
            />
          </div>
        </div>
      </div>
    );
  },
);
