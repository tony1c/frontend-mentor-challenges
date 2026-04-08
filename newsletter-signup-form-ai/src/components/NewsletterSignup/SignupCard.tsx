import { type SubscribeFormProps, SubscribeForm } from "./SubscribeForm";
import { BenefitsList } from "./BenefitsList";
import { SignupIllustration } from "./SignupIllustration";

export type SignupCardProps = SubscribeFormProps;

export function SignupCard(props: SignupCardProps) {
  return (
    <article className="w-full max-w-93.75 overflow-hidden rounded-2xl bg-white shadow-[0_16px_32px_hsl(234_29%_20%/0.25)] md:max-w-150 lg:grid lg:max-w-4xl lg:grid-cols-[1.05fr_1fr]">
      <SignupIllustration />

      <div className="flex flex-col gap-6 px-6 py-10 font-normal md:gap-8 md:p-12 lg:order-1 lg:justify-center">
        <div className="space-y-3 md:space-y-4">
          <h1 className="text-[2.5rem] leading-none font-bold md:text-[3.5rem]">
            Stay updated!
          </h1>
          <p className="text-base leading-6 md:text-base">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
        </div>

        <BenefitsList />

        <SubscribeForm {...props} />
      </div>
    </article>
  );
}
