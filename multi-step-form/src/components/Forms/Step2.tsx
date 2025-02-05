import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLayout } from '../../layouts/FormLayout';

type Inputs = {
  name: string;
};

export const Step2 = () => {
  const { handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <FormLayout
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-[22px]'>
        <h1>hello from step2</h1>
      </form>
    </FormLayout>
  );
};
