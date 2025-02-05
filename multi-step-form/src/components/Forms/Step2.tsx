import { useFormContext } from 'react-hook-form';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconPro from '../../assets/images/icon-pro.svg';
import { FormLayout } from '../../layouts/FormLayout';
import { Radio } from './Radio';
import { TogglePlan } from './TogglePlan';

export const Step2 = () => {
  const { register, setValue, watch } = useFormContext();

  const selectedValue = watch('plan');

  const handleRadioChange = (value: string) => {
    // Update the form value when a radio button is clicked
    setValue('plan', value, { shouldValidate: true });
  };

  return (
    <FormLayout
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'>
      <div className='mt-[22px] space-y-3'>
        <Radio
          icon={iconArcade}
          label='Arcade'
          price='$9/mo'
          value='Arcade Monthly'
          checked={selectedValue === 'Arcade Monthly'}
          handleChecked={() => handleRadioChange('Arcade Monthly')}
          {...register('plan')}
        />

        <Radio
          icon={iconAdvanced}
          label='Advanced'
          price='$12/mo'
          value='Advanced Monthly'
          checked={selectedValue === 'Advanced Monthly'}
          handleChecked={() => handleRadioChange('Advanced Monthly')}
          {...register('plan')}
        />

        <Radio
          icon={iconPro}
          label='Pro'
          price='$15/mo'
          value='Pro Monthly'
          checked={selectedValue === 'Pro Monthly'}
          handleChecked={() => handleRadioChange('Pro Monthly')}
          {...register('plan')}
        />

        <div className='mt-6'>
          <TogglePlan />
        </div>
      </div>
    </FormLayout>
  );
};
