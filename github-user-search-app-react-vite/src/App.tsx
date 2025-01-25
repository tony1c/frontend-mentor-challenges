import { Input } from './components/Input';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main className='bg-c-light-F6F8FF dark:bg-c-dark-141D2F h-screen'>
      <div className='p-[24px] pt-[31px]'>
        <div className='mx-auto max-w-[327px]'>
          <Navbar />
          <Input />
        </div>
      </div>
    </main>
  );
}

export default App;
