import { useFormContext } from 'react-hook-form';
import { FormLayout } from '../../layouts/FormLayout';
import { Input } from './Input';

export type Step1Type = {
  name: string;
  email: string;
  phone: string;
};

export const Step1 = () => {
  const { register } = useFormContext<Step1Type>();

  return (
    <FormLayout
      title='Personal info'
      description='Please provide your name, email address, and phone number.'>
      <div className='mt-[22px] space-y-4'>
        <Input
          name='name'
          label='Name'
          placeholder='eg. Stephen King'
          register={register}
        />

        <Input
          name='email'
          label='Email Address'
          placeholder='e.g. @lorem.com'
          register={register}
        />

        <Input
          name='phone'
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          register={register}
        />
      </div>
    </FormLayout>
  );
};
