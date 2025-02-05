import { UseFormRegister } from 'react-hook-form';

type Inputs = {
  name: string;
};

interface InputProps {
  register: UseFormRegister<Inputs>;
  name: keyof Inputs;
  label: string;
  placeholder: string;
}

export const Input = ({ ...props }: InputProps) => {
  return (
    <fieldset className='flex flex-col gap-[3px]'>
      <label htmlFor={props.name} className='text-denim body-s'>
        {props.label}
      </label>
      <input
        type='text'
        id={props.name}
        className='border-border text-grey h-10 rounded-[4px] border px-4 text-[15px] font-medium'
        placeholder={props.placeholder}
        {...props.register(props.name)}
      />
    </fieldset>
  );
};
