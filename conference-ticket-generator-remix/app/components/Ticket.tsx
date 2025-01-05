import type { TicketProps } from "~/types/types";

export const Ticket = (props: TicketProps) => {
  return (
    <div
      className={
        "relative mt-[72px] h-[160px] bg-[url('images/pattern-ticket.svg')] bg-contain bg-center bg-no-repeat p-150"
      }
    >
      {/* ticket nr */}
      <span className="absolute right-150 top-1/2 -translate-y-1/2 rotate-90">
        #01609
      </span>
      <div className="flex h-full flex-col justify-between">
        <div className="flex gap-150">
          <div className="size-[29px]">
            <img src="/images/logo-mark.svg" alt="Logo" />
          </div>
          <div className="space-y-100">
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

        <div className="flex gap-150">
          <div className="size-[45px] overflow-hidden rounded-6">
            <img src={props.file} alt="Avatar" />
          </div>
          <div>
            <span className="text-[20px] font-medium leading-[110%] -tracking-[1px] text-c-neutral-0">
              {props.name}
            </span>
            <div className="space-x-050">
              <img
                src="/images/icon-github.svg"
                alt="Github icon"
                className="inline-block size-[16px]"
              />
              <span className="text-preset-6-mobile text-c-neutral-300">
                {props.username}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
