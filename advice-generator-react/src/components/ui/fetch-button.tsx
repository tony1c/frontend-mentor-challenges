type FetchButtonProps = {
  fetchAdvice: () => Promise<void>;
};

export const FetchButton = ({ fetchAdvice }: FetchButtonProps) => {
  return (
    <div className="group">
      <button
        onClick={fetchAdvice}
        type="button"
        className="absolute bottom-0 left-1/2 flex size-[64px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-c-neon-green"
      >
        <img src="./src/assets/icon-dice.svg" alt="Dice icon" />
      </button>

      {/* radial effect on hover */}
      <div className="absolute bottom-0 left-1/2 -z-10 flex size-[64px] -translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-c-neon-green opacity-50 transition-all duration-300 group-hover:blur-lg"></div>
    </div>
  );
};
