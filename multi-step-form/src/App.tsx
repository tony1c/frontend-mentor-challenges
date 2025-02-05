import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Controls } from './components/Controls';
import { ViewStep } from './components/Forms/ViewStep';
import { Steps } from './components/Steps';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  plan: string;
};

function App() {
  const methods = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

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
