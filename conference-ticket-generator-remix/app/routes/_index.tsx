import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      {/* main bg */}
      <div
        className={
          "relative -z-50 h-screen bg-[url('/images/background-mobile.png')] bg-cover bg-center md:bg-[url('/images/background-tablet.png')] lg:bg-[url('/images/background-desktop.png')]"
        }
      ></div>
      {/* grid */}
      <div
        className={
          "absolute inset-0 -z-40 bg-[url('/images/pattern-lines.svg')] bg-cover bg-center bg-no-repeat"
        }
      ></div>
      {/* top line */}
      <div className="absolute left-[263px] top-[24px] -z-30">
        <img
          src="/images/pattern-squiggly-line-top.svg"
          className="h-[53px] w-[112px]"
          alt="Line top"
        />
      </div>
      {/* circle */}
      <div className="absolute left-[313px] top-[548px] -z-30">
        <img
          src="/images/pattern-circle.svg"
          className="size-[107px]"
          alt="Circle decoration"
        />
      </div>
      <div className="absolute bottom-0 -z-30">
        <img
          src="/images/pattern-squiggly-line-bottom.svg"
          className="h-[210px] w-[301px]"
          alt="Line bottom decoration"
        />
      </div>
    </main>
  );
}
{
  /* <main
      className={
        "relative -z-50 max-h-[1100px] min-h-screen max-w-[1440px] overflow-hidden bg-[url('/images/background-mobile.png')] bg-cover bg-center md:bg-[url('/images/background-tablet.png')] lg:bg-[url('/images/background-desktop.png')]"
      }
    >
      <div
        className={
          "-z-40 h-[778px] w-[1266px] bg-[url('/images/pattern-lines.svg')] bg-center bg-no-repeat md:w-[1404px] lg:h-[1100px] lg:w-[1864px]"
        }
      ></div>
    </main> */
}
