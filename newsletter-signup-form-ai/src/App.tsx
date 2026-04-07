import { type SubmitEvent, useId, useRef, useState } from "react";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";
import illustrationTablet from "./assets/images/illustration-sign-up-tablet.svg";
import iconList from "./assets/images/icon-list.svg";
import iconSuccess from "./assets/images/icon-success.svg";

const benefits = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
] as const;

type View = "signup" | "success";

function App() {
  const [view, setView] = useState<View>("signup");
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const emailFieldId: string = useId();
  const errorId: string = useId();

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = emailInputRef.current;
    if (!input) return;

    const value = input.value.trim();
    if (value.length === 0) {
      setError("Email address is required");
      return;
    }

    if (!input.checkValidity()) {
      setError("Valid email required");
      return;
    }

    setError(null);
    setSubmittedEmail(value);
    setView("success");
  }

  function handleDismiss() {
    setView("signup");
    setEmail("");
    setError(null);
  }

  const linkClass =
    "rounded-sm underline underline-offset-2 transition-colors hover:text-red hover:decoration-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

  return (
    <>
      <div className="flex min-h-screen flex-col bg-blue-800 font-roboto text-blue-800">
        <main className="flex flex-1 items-center justify-center px-4 py-8 md:px-10 md:py-16 lg:px-6 lg:py-0">
          {view === "signup" ? (
            <article className="w-full max-w-93.75 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_hsl(234_29%_20%/0.25)] md:max-w-150 lg:grid lg:max-w-4xl lg:grid-cols-[1.05fr_1fr]">
              <div className="flex justify-center bg-white lg:order-2 lg:min-h-146 lg:items-stretch lg:p-6">
                <picture className="block h-full w-full">
                  <source
                    media="(min-width: 1024px)"
                    srcSet={illustrationDesktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={illustrationTablet}
                  />
                  <img
                    src={illustrationMobile}
                    alt=""
                    className="h-auto w-full object-cover object-center lg:h-full lg:min-h-146"
                  />
                </picture>
              </div>

              <div className="flex flex-col gap-6 px-6 py-10 font-normal md:gap-8 md:p-12 lg:order-1 lg:justify-center">
                <div className="space-y-3 md:space-y-4">
                  <h1 className="text-[2.5rem] leading-none font-bold md:text-[3.5rem]">
                    Stay updated!
                  </h1>
                  <p className="text-base leading-6 md:text-base">
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>
                </div>

                <ul className="space-y-2.5 text-base leading-6 md:space-y-3">
                  {benefits.map((line) => (
                    <li key={line} className="flex gap-4">
                      <img
                        src={iconList}
                        alt=""
                        width={21}
                        height={21}
                        className="mt-1 size-[21px] shrink-0"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <form
                  className="flex flex-col gap-6 md:gap-8"
                  onSubmit={handleSubmit}
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
                      ref={emailInputRef}
                      id={emailFieldId}
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="email@company.com"
                      value={email}
                      onChange={(ev) => {
                        setEmail(ev.target.value);
                        if (error) setError(null);
                      }}
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
              </div>
            </article>
          ) : (
            <article className="w-full max-w-93.75 rounded-2xl bg-white px-6 py-10 shadow-[0_16px_32px_hsl(234_29%_20%/0.25)] md:max-w-126 md:p-16">
              <div className="flex flex-col gap-10 md:gap-8">
                <img
                  src={iconSuccess}
                  alt=""
                  width={64}
                  height={64}
                  className="size-16"
                />
                <div className="space-y-6">
                  <h1 className="text-[2.5rem] leading-none font-bold md:text-5xl md:leading-none">
                    Thanks for subscribing!
                  </h1>
                  <p className="text-base leading-6 md:text-base">
                    A confirmation email has been sent to{" "}
                    <span className="font-bold">{submittedEmail}</span>. Please
                    open it and click the button inside to confirm your
                    subscription.
                  </p>
                </div>
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-lg bg-blue-800 py-4 text-center text-base font-bold text-white transition-colors hover:bg-linear-to-r hover:from-[#FF6A3A] hover:to-red hover:shadow-[0_16px_32px_hsl(4_100%_67%/0.35)] focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:mt-2"
                  onClick={handleDismiss}
                >
                  Dismiss message
                </button>
              </div>
            </article>
          )}
        </main>
      </div>
      <footer className="px-4 py-6 text-center text-sm md:px-8">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className={linkClass}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/tony1c"
          className={linkClass}
        >
          tony1c
        </a>
        .
      </footer>
    </>
  );
}

export default App;
