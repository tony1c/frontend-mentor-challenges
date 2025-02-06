import { useFormContext } from 'react-hook-form';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconPro from '../../assets/images/icon-pro.svg';
import { usePlan } from '../../contexts/PlanContext';
import { FormLayout } from '../../layouts/FormLayout';
import { Radio } from './Radio';
import { TogglePlan } from './TogglePlan';

export type Step2Type = {
  selectedPlan: string;
  plan: string;
};

export const Step2 = () => {
  const { register, setValue, watch } = useFormContext<Step2Type>();
  const { plan } = usePlan();

  const selectedValue = watch('plan');

  const handleRadioChange = (value: string) => {
    setValue('plan', value, { shouldValidate: true });
  };

  const getRadioProps = (
    label: string,
    monthlyPrice: string,
    yearlyPrice: string,
    plan: string,
    selectedValue: string,
    handleRadioChange: (value: string) => void,
  ) => {
    const isMonthly = plan === 'monthly';
    return {
      price: isMonthly ? monthlyPrice : yearlyPrice,
      value: isMonthly ? `${label} Monthly` : `${label} Yearly`,
      checked: isMonthly
        ? selectedValue === `${label} Monthly`
        : selectedValue === `${label} Yearly`,
      handleChecked: () =>
        handleRadioChange(isMonthly ? `${label} Monthly` : `${label} Yearly`),
    };
  };

  const arcadeProps = getRadioProps(
    'Arcade',
    '$9/mo',
    '$90/yr',
    plan,
    selectedValue,
    handleRadioChange,
  );

  const advancedProps = getRadioProps(
    'Advanced',
    '$12/mo',
    '$120/yr',
    plan,
    selectedValue,
    handleRadioChange,
  );

  const proProps = getRadioProps(
    'Pro',
    '$15/mo',
    '$150/yr',
    plan,
    selectedValue,
    handleRadioChange,
  );
  return (
    <FormLayout
      title='Select your plan'
      description='You have the option of monthly or yearly billing.'>
      <div className='mt-[22px] space-y-3'>
        <Radio
          icon={iconArcade}
          label='Arcade'
          price={arcadeProps.price}
          value={arcadeProps.value}
          checked={arcadeProps.checked}
          handleChecked={arcadeProps.handleChecked}
          {...register('plan')}
        />

        <Radio
          icon={iconAdvanced}
          label='Advanced'
          price={advancedProps.price}
          value={advancedProps.value}
          checked={advancedProps.checked}
          handleChecked={advancedProps.handleChecked}
          {...register('plan')}
        />

        <Radio
          icon={iconPro}
          label='Pro'
          price={proProps.price}
          value={proProps.value}
          checked={proProps.checked}
          handleChecked={proProps.handleChecked}
          {...register('plan')}
        />

        <div className='mt-6'>
          <TogglePlan />
        </div>
      </div>
    </FormLayout>
  );
};
