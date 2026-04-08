import illustrationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import illustrationTablet from "../../assets/images/illustration-sign-up-tablet.svg";

export function SignupIllustration() {
  return (
    <div className="flex justify-center bg-white lg:order-2 lg:min-h-146 lg:items-stretch lg:p-6">
      <picture className="block h-full w-full">
        <source media="(min-width: 1024px)" srcSet={illustrationDesktop} />
        <source media="(min-width: 768px)" srcSet={illustrationTablet} />
        <img
          src={illustrationMobile}
          alt=""
          className="h-auto w-full object-cover object-center lg:h-full lg:min-h-146"
        />
      </picture>
    </div>
  );
}
