import { Controls } from './components/Controls';
import { ViewStep } from './components/Forms/ViewStep';
import { Steps } from './components/Steps';

function App() {
  return (
    <main className='bg-bg grid grid-cols-1 lg:grid-cols-2'>
      {/* first col */}
      <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat">
        <Steps />
      </div>
      {/* second col */}
      <div>
        <div className='px-4'>
          {/* form */}
          <ViewStep />
        </div>
        <Controls />
      </div>
    </main>
  );
}

export default App;
