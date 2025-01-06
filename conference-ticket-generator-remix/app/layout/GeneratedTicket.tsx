import { Ticket } from "~/components/Ticket";
import type { TicketProps } from "~/types/types";

export const GeneratedTicket = (props: TicketProps) => {
  return (
    <div className="relative max-w-[343px]">
      <div className="space-y-250 text-center">
        <h1 className="text-preset-1-mobile">
          Congrats,{" "}
          <span className="bg-c-gradient-01 bg-clip-text text-transparent">
            {props.name}
          </span>
          ! Your ticket is ready.
        </h1>
        <p className="text-preset-4-mobile">
          We&apos;ve emailed your ticket to{" "}
          <span className="text-c-orange-500">{props.email}</span> and will send
          updates in the run up to the event.
        </p>
      </div>
      <Ticket {...props} />
    </div>
  );
};
