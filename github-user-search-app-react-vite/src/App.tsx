import { Input } from './components/Input';
import { Navbar } from './components/Navbar';
import { UserDisplay } from './components/user/UserDisplay';

function App() {
  return (
    <main className='bg-c-light-F6F8FF dark:bg-c-dark-141D2F h-screen'>
      <div className='p-[24px] pt-[31px]'>
        <div className='mx-auto max-w-[327px]'>
          <Navbar />
          <Input />
          <UserDisplay />
        </div>
      </div>
    </main>
  );
}

export default App;
