import { Controls } from './components/controls';
import { Steps } from './components/steps';

function App() {
  return (
    <main className='grid bg-bg grid-cols-1 lg:grid-cols-2'>
      {/* first col */}
      <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
        <Steps />
      </div>
      {/* second col */}
      <div>
        <div className='px-4'>
          <div className='h-[376px] max-w-[343px] mx-auto bg-white rounded-[10px] -translate-y-[51px] px-6 py-8'>
            <div className='flex flex-col gap-[9px]'>
              <h1 className='font-bold text-[24px]'>Personal info</h1>
              <p className='body-l text-grey'>
                Please provide your name, email address, and phone number.
              </p>
            </div>
          </div>
        </div>
        <Controls />
      </div>
    </main>
  );
}

export default App;
