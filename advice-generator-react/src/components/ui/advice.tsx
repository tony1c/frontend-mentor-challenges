import { useMediaQuery } from "react-responsive";
import { useFetchAdvice } from "../../hooks/useFetchAdvice";
import { FetchButton } from "./fetch-button";
import mobilePattern from "../../assets/pattern-divider-mobile.svg";
import desktopPattern from "../../assets/pattern-divider-desktop.svg";

export const Advice = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const dividerSrc = isMobile ? mobilePattern : desktopPattern;
  const { slip, fetchAdvice } = useFetchAdvice();

  return (
    <>
      <h1 className="flex gap-3 text-xs font-800 uppercase tracking-[0.29em] text-c-neon-green md:space-x-[15px] md:tracking-[0.31em]">
        <span>Advice </span>
        <span># {slip.id}</span>
      </h1>
      <p className="min-h-[128px] max-w-[314px] text-pretty text-center text-2xl font-800 text-c-light-cyan md:max-w-[443px] md:text-[1.7rem] md:leading-[2.3rem]">
        “{slip.advice}”
      </p>
      <img src={dividerSrc} alt="Pattern divider" />
      <FetchButton fetchAdvice={fetchAdvice} />
    </>
  );
};
