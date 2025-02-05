import { useFormContext } from 'react-hook-form';
import { FormLayout } from '../../layouts/FormLayout';
import { Input } from './Input';

interface Inputs {
  age: number;
}

export const Step2 = () => {
  const { register } = useFormContext<Inputs>();

  return (
    <FormLayout
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'>
      <div className='mt-[22px]'>
        <Input register={register} name='age' label='Select Age' />
      </div>
    </FormLayout>
  );
};
