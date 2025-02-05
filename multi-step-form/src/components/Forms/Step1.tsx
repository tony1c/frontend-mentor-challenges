import { useFormContext } from 'react-hook-form';
import { FormLayout } from '../../layouts/FormLayout';
import { Input } from './Input';

interface Inputs {
  name: string;
}

export const Step1 = () => {
  const { register } = useFormContext<Inputs>();

  return (
    <FormLayout
      title='Personal info'
      description='Please provide your name, email address, and phone number.'>
      <div className='mt-[22px]'>
        <Input
          name='name'
          label='Name'
          placeholder='eg. Stephen King'
          register={register}
        />
      </div>
    </FormLayout>
  );
};
