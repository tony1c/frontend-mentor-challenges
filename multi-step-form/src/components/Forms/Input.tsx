import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type?: string;
  label: string;
  placeholder?: string;
  className?: string;
  error?: string;
}

export const Input = <T extends FieldValues>({
  register,
  name,
  type = 'text',
  label,
  placeholder = '',
  className = '',
  error,
}: InputProps<T>) => {
  return (
    <fieldset className='flex flex-col gap-[3px]'>
      <label htmlFor={name} className='text-denim body-s'>
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`border-border text-grey h-10 rounded-[4px] border px-4 text-[15px] font-medium ${className}`}
        placeholder={placeholder}
        {...register(name)}
      />
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </fieldset>
  );
};
