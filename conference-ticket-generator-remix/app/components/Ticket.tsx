export const Ticket = () => {
  return (
    <div
      className={
        "h-[280px] w-[600px] bg-[url('images/pattern-ticket.svg')] bg-contain bg-center bg-no-repeat"
      }
    >
      <div className="flex gap-250 p-300">
        <div className="size-[40px]">
          <img src="/images/logo-mark.svg" alt="Logo" />
        </div>
        <div className="flex flex-col gap-150">
          <h2 className="text-preset-2-mobile text-c-neutral-0 md:text-preset-2">
            Coding Conf
          </h2>
          <div className="flex gap-200 text-preset-6-mobile text-c-neutral-300 md:text-preset-6">
            <span>Jan 31, 2025</span>
            <span>/</span>
            <span>Offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};
