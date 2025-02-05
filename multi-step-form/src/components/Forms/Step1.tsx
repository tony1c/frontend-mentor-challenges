import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLayout } from '../../layouts/FormLayout';
import { Input } from './Input';

type Inputs = {
  name: string;
};

export const Step1 = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <FormLayout
      title='Personal info'
      description='Please provide your name, email address, and phone number.'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-[22px]'>
        <Input
          name='name'
          label='Name'
          placeholder='eg. Stephen King'
          register={register}
        />
      </form>
    </FormLayout>
  );
};
