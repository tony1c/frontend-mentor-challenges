import { type ChangeEvent, type RefObject, type SubmitEvent } from "react";

export type SubscribeFormProps = {
  email: string;
  onEmailChange: (ev: ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  emailFieldId: string;
  errorId: string;
  inputRef: RefObject<HTMLInputElement | null>;
  onSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
};

export function SubscribeForm({
  email,
  onEmailChange,
  error,
  emailFieldId,
  errorId,
  inputRef,
  onSubmit,
}: SubscribeFormProps) {
  return (
    <form
      className="flex flex-col gap-6 md:gap-8"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-baseline lg:gap-x-4">
        <label
          className="text-sm font-bold lg:col-start-1 lg:row-start-1"
          htmlFor={emailFieldId}
        >
          Email address
        </label>
        <input
          ref={inputRef}
          id={emailFieldId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="email@company.com"
          value={email}
          onChange={onEmailChange}
          aria-invalid={error != null}
          aria-describedby={error != null ? errorId : undefined}
          className={
            "col-span-full min-w-0 cursor-pointer rounded-lg border px-6 py-3 text-base outline-none transition-[border-color,box-shadow] placeholder:text-grey md:py-4 lg:col-span-2 lg:row-start-2 " +
            (error
              ? "border-red bg-red/10 text-red placeholder:text-red/70 focus-visible:border-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2"
              : "border-grey hover:border-blue-800 focus-visible:border-blue-800 focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2")
          }
        />
        {error ? (
          <p
            id={errorId}
            className="col-span-full text-sm font-bold text-red lg:col-start-2 lg:row-start-1 lg:w-max lg:max-w-[min(100%,18rem)] lg:justify-self-end lg:text-right"
            role="alert"
          >
            {error}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer rounded-lg bg-blue-800 py-4 text-center text-base font-bold text-white transition-colors hover:bg-linear-to-r hover:from-[#FF6A3A] hover:to-red hover:shadow-[0_16px_32px_hsl(4_100%_67%/0.35)] focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
