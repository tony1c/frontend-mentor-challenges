import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Controls } from './components/Controls';
import { ViewStep } from './components/Forms/ViewStep';
import { Steps } from './components/Steps';
import { Step1Type } from './components/Forms/Step1';
import { Step2Type } from './components/Forms/Step2';

type FormType = Step1Type & Step2Type;

function App() {
  const methods = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = data => console.log(data);

  return (
    <main className='bg-bg grid grid-cols-1 lg:grid-cols-2'>
      {/* first col */}
      <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat">
        <Steps />
      </div>
      {/* second col */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className='px-4'>
            {/* form */}
            <ViewStep />
          </div>
          <Controls />
        </form>
      </FormProvider>
    </main>
  );
}

export default App;
