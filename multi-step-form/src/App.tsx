function App() {
  return (
    <main className='grid bg-bg grid-cols-1 lg:grid-cols-2'>
      {/* first col */}
      <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-no-repeat bg-cover">
        <div className='flex gap-4 justify-center mt-[32px]'>
          <div className='size-[33px] bg-sky-blue rounded-full flex items-center justify-center text-denim'>
            1
          </div>
          <div className='size-[33px] rounded-full flex items-center justify-center text-white border-white border'>
            2
          </div>
        </div>
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
        <div className='w-full bg-white h-[72px] mt-[120px] p-4 flex justify-end'>
          <button className='bg-denim w-[97px] text-white h-10 rounded-[4px] font-medium text-[14px]'>
            Next step
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
