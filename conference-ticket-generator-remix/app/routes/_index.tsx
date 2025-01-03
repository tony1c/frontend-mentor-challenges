import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className={
        "bg-[url('/images/background-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/background-tablet.png')] lg:bg-[url('/images/background-desktop.png')]"
      }
    >
      <div className="relative mx-auto min-h-screen overflow-hidden">
        {/* grid */}
        <div
          className={
            "absolute h-[778px] w-[1266px] -translate-x-[446px] bg-[url('/images/pattern-lines.svg')] bg-cover bg-center md:w-[1404px] md:-translate-x-[318px] lg:left-1/2 lg:h-[1100px] lg:w-[1864px] lg:-translate-x-1/2"
          }
        ></div>
        {/* top line */}
        <div className="absolute translate-x-[263px] translate-y-[24px] md:translate-x-[536px] md:translate-y-[88px]">
          <img
            src="/images/pattern-squiggly-line-top.svg"
            alt="Top line decoration"
            className="h-[53px] w-[112px] md:h-[108px] md:w-[232px]"
          />
        </div>
        {/* circle */}
        <div className="absolute translate-x-[313px] translate-y-[548px] md:translate-x-[669px] md:translate-y-[552px]">
          <img
            src="/images/pattern-circle.svg"
            alt="Top line decoration"
            className="size-[107px] md:size-[217px]"
          />
        </div>
        {/* bottom line */}
        <div className="absolute bottom-0">
          <img
            src="/images/pattern-squiggly-line-bottom.svg"
            alt="Bottom line decoration"
            className="h-[210px] w-[301px] md:h-[276px] md:w-[396px]"
          />
        </div>
        {/* content */}
        <main className="container relative mx-auto text-c-neutral-0">
          <h1 className="text-preset-1">Hello</h1>
        </main>
      </div>
    </div>
  );
}
