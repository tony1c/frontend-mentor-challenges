import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { Logo } from "~/components/Logo";
import { Upload } from "~/components/Upload";
import { GeneratedTicket } from "~/layout/GeneratedTicket";
import { TicketData } from "~/types/types";
// import { GeneratedTicket } from "~/layout/GeneratedTicket";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<TicketData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketData>();

  const onSubmit: SubmitHandler<TicketData> = (data) => {
    data.avatarUrl = avatarUrl!;
    setSubmittedData(data);
  };

  const handleAvatarChange = (newAvatarUrl: string | null) => {
    setAvatarUrl(newAvatarUrl);
  };

  return (
    <div
      className={
        "bg-[url('/images/background-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/background-tablet.png')] lg:bg-[url('/images/background-desktop.png')]"
      }
    >
      <div className="relative min-h-[995px] overflow-hidden md:min-h-[1080px] lg:min-h-[1100px]">
        {/* grid */}
        <div
          className={
            "absolute h-[778px] w-[1266px] -translate-x-[446px] bg-[url('/images/pattern-lines.svg')] bg-cover bg-center md:w-[1404px] md:-translate-x-[318px] lg:left-1/2 lg:h-[1100px] lg:w-[1864px] lg:-translate-x-1/2"
          }
        ></div>
        {/* top line */}
        <div className="absolute h-[53px] w-[112px] translate-x-[263px] translate-y-[24px] md:h-[108px] md:w-[232px] md:translate-x-[536px] md:translate-y-[88px] lg:h-[208px] lg:w-[446px] lg:translate-x-[994px] lg:translate-y-[76px]">
          <img
            src="/images/pattern-squiggly-line-top.svg"
            alt="Top line decoration"
          />
        </div>
        {/* circle middle */}
        <div className="absolute size-[107px] translate-x-[313px] translate-y-[548px] md:size-[217px] md:translate-x-[669px] md:translate-y-[552px] lg:translate-x-[938px] lg:translate-y-[534px]">
          <img src="/images/pattern-circle.svg" alt="Top line decoration" />
        </div>
        {/* circle top */}
        <div className="absolute size-[107px] -translate-x-[20px] -translate-y-[30px] md:size-[217px] md:-translate-x-[27px] md:-translate-y-[87px] lg:-translate-y-[85px] lg:translate-x-[44px]">
          <img src="/images/pattern-circle.svg" alt="Top line decoration" />
        </div>
        {/* bottom line */}
        <div className="absolute bottom-0 h-[210px] w-[301px] md:h-[276px] md:w-[396px] lg:h-[476px] lg:w-[825px]">
          <img
            src="/images/pattern-squiggly-line-bottom.svg"
            alt="Bottom line decoration"
            className="overflow-visible object-left lg:object-none"
          />
        </div>
        {/* content */}
        <main className="mt-[33px] flex flex-col items-center justify-center gap-300 font-inconsolata text-c-neutral-0">
          <div>
            <Logo />
          </div>
          {!submittedData ? (
            <>
              <div className="flex max-w-[343px] flex-col items-center gap-250 text-center md:max-w-[705px] lg:max-w-[891px]">
                <h2 className="text-preset-1-mobile md:text-preset-1">
                  Your Journey to Coding Conf 2025 Starts Here!
                </h2>
                <p className="text-preset-4-mobile text-c-neutral-300 md:text-preset-4">
                  Secure your spot at next year’s biggest coding conference.
                </p>
              </div>

              {/* form */}
              <div className="relative">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[343px] space-y-300 md:w-[522px] lg:w-[460px]"
                >
                  {/* upload field */}
                  <Upload onAvatarChange={handleAvatarChange} />
                  <Input
                    id="name"
                    type="text"
                    label="Full Name"
                    register={register("name")}
                  />
                  <Input
                    id="email"
                    errors={errors}
                    type="email"
                    label="Email Address"
                    placeholder="example@email.com"
                    register={register("email", {
                      required: {
                        value: true,
                        message: "Please enter a valid email address.",
                      },
                    })}
                  />
                  <Input
                    id="username"
                    type="text"
                    label="Github Username"
                    placeholder="@yourusername"
                    register={register("username")}
                  />
                  <Button />
                </form>
              </div>
            </>
          ) : (
            <GeneratedTicket {...submittedData} />
          )}
        </main>
      </div>
    </div>
  );
}
