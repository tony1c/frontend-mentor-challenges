import { FormLayout } from '../../layouts/FormLayout';
import { Checkbox } from './Checkbox';

export const Step3 = () => {
  return (
    <FormLayout
      title='Pick add-ons'
      description='Add-ons help enhance your gaming experience.'>
      <Checkbox />
    </FormLayout>
  );
};
