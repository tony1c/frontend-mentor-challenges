import { PropsWithChildren } from "react";

export const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative z-10 mt-[120px] min-h-[315px] w-[343px] rounded-xl bg-c-dark-grayish-blue py-[41px] md:mt-[222px] md:h-[334px] md:w-[538px] md:py-[50px]">
      <div className="flex flex-col items-center gap-[24px] md:gap-[28px]">
        {children}
      </div>
    </div>
  );
};
