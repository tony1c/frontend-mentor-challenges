import { useMediaQuery } from "react-responsive";
import { useFetchAdvice } from "./hooks/useFetchAdvice";

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dividerSrc = isMobile
    ? "./src/assets/pattern-divider-mobile.svg"
    : "./src/assets/pattern-divider-desktop.svg";
  const { slip, fetchAdvice } = useFetchAdvice();

  return (
    <div className="bg-c-dark-blue font-manrope">
      <div className="container mx-auto h-screen">
        <div className="flex justify-center">
          <div className="relative z-10 mt-[120px] min-h-[315px] w-[343px] rounded-xl bg-c-dark-grayish-blue py-[41px] md:mt-[222px] md:h-[334px] md:w-[538px] md:py-[50px]">
            <div className="flex flex-col items-center gap-[24px] md:gap-[28px]">
              <h1 className="text-xs font-800 uppercase tracking-[0.29em] text-c-neon-green md:space-x-[15px] md:tracking-[0.31em]">
                <span>Advice</span>
                <span> # {slip.id}</span>
              </h1>
              <p className="min-h-[128px] max-w-[314px] text-pretty text-center text-2xl font-800 text-c-light-cyan md:max-w-[443px] md:text-[1.7rem] md:leading-[2.3rem]">
                “{slip.advice}”
              </p>

              <img src={dividerSrc} alt="Pattern divider" />

              <div className="group">
                <button
                  onClick={fetchAdvice}
                  className="absolute bottom-0 left-1/2 flex size-[64px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-c-neon-green"
                >
                  <img src="./src/assets/icon-dice.svg" alt="Dice icon" />
                </button>

                {/* radial effect on hover */}
                <div className="absolute bottom-0 left-1/2 -z-10 flex size-[64px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-c-neon-green opacity-50 transition-all duration-300 group-hover:blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
