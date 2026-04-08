import iconSuccess from "../../assets/images/icon-success.svg";

export type SuccessCardProps = {
  submittedEmail: string;
  onDismiss: () => void;
};

export function SuccessCard({ submittedEmail, onDismiss }: SuccessCardProps) {
  return (
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
            <span className="font-bold">{submittedEmail}</span>. Please open it
            and click the button inside to confirm your subscription.
          </p>
        </div>
        <button
          type="button"
          className="w-full cursor-pointer rounded-lg bg-blue-800 py-4 text-center text-base font-bold text-white transition-colors hover:bg-linear-to-r hover:from-[#FF6A3A] hover:to-red hover:shadow-[0_16px_32px_hsl(4_100%_67%/0.35)] focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:mt-2"
          onClick={onDismiss}
        >
          Dismiss message
        </button>
      </div>
    </article>
  );
}
