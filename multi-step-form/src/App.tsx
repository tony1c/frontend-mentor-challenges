import { SubmitHandler, useForm } from 'react-hook-form';
import { Controls } from './components/controls';
import { Steps } from './components/steps';

type Inputs = {
  name: string;
};

function App() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <main className='bg-bg grid grid-cols-1 lg:grid-cols-2'>
      {/* first col */}
      <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat">
        <Steps />
      </div>
      {/* second col */}
      <div>
        <div className='px-4'>
          <div className='mx-auto h-[376px] max-w-[343px] -translate-y-[51px] rounded-[10px] bg-white px-6 py-8'>
            <div className='flex flex-col gap-[9px]'>
              <h1 className='text-[24px] font-bold'>Personal info</h1>
              <p className='body-l text-grey'>
                Please provide your name, email address, and phone number.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-[22px]'>
              <fieldset className='flex flex-col gap-[3px]'>
                <label htmlFor='name' className='text-denim body-s'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  {...register('name')}
                  className='border-border text-grey h-10 rounded-[4px] border px-4 text-[15px] font-medium'
                  placeholder='eg. Stephen King'
                />
              </fieldset>
            </form>
          </div>
        </div>
        <Controls />
      </div>
    </main>
  );
}

export default App;
