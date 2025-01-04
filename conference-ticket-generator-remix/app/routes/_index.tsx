import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { ChangeEvent, useRef, useState } from "react";
import { Logo } from "~/components/Logo";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
      console.log("Avatar selected!");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.dataTransfer?.files[0];

    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
      console.log("File dragged successfully");
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setAvatar(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
        <main className="container relative mx-auto flex flex-col items-center justify-center font-inconsolata text-c-neutral-0">
          <div className="translate-y-[33px]">
            <Logo />
          </div>
          <div className="flex max-w-[343px] translate-y-[97px] flex-col items-center gap-250 text-center">
            <h2 className="text-preset-1-mobile">
              Your Journey to Coding Conf 2025 Starts Here!
            </h2>
            <p className="text-preset-4-mobile">
              Secure your spot at next year’s biggest coding conference.
            </p>
          </div>

          {/* form */}
          <div className="translate-y-[138px]">
            <Form className="h-[610px] w-[343px]">
              {/* upload field */}
              <div className="h-[190px] space-y-150">
                <label className="text-preset-5" htmlFor="file">
                  Upload Avatar
                </label>
                {/* bg decoration */}
                <div className="group relative flex h-[126px] flex-col items-center justify-center overflow-hidden rounded-12 border border-dashed border-c-neutral-500 bg-c-neutral-0 bg-opacity-[8%] backdrop-blur-[5px] transition-all duration-300 hover:bg-opacity-20">
                  {/* input */}
                  {/* trick to hide and get the cursor pointer text-[0px] and translate */}
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept=".jpg, .png"
                    onChange={(e) => handleFileUpload(e)}
                    onDrop={(e) => handleDrop(e)}
                    onDragOver={(e) => e.preventDefault()}
                    ref={fileInputRef}
                    className={`absolute inset-0 z-10 -translate-x-200 cursor-pointer text-[0px] opacity-0 ${avatar && "pointer-events-none"}`}
                  />
                  {!avatar ? (
                    // upload icon
                    <div className="flex flex-col items-center justify-center gap-200">
                      <button className="shadow-dropshadow-icon flex size-[50px] items-center justify-center rounded-12 border border-c-neutral-700 bg-c-neutral-0 bg-opacity-10 transition-opacity duration-300 group-hover:opacity-40">
                        <img src="/images/icon-upload.svg" alt="Upload icon" />
                      </button>
                      <span className="text-preset-6 text-c-neutral-300">
                        Drag and drop or click to upload
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-200">
                      <div className="shadow-dropshadow-icon size-[50px] overflow-hidden rounded-12 border border-c-neutral-500">
                        <img src={avatar} alt="Avatar" />
                      </div>
                      <div className="space-x-100">
                        <button
                          onClick={handleRemoveImage}
                          type="button"
                          className="rounded-4 bg-c-neutral-0 bg-opacity-10 px-100 py-050 text-c-neutral-300 underline underline-offset-2"
                        >
                          Remove image
                        </button>
                        <button
                          type="button"
                          className="rounded-4 bg-c-neutral-0 bg-opacity-10 px-100 py-050 text-c-neutral-0"
                          onClick={handleChangeImage}
                        >
                          Change image
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="inline-flex gap-200">
                  <div className="size-200">
                    <img src="/images/icon-info.svg" alt="Info icon" />
                  </div>
                  <span className="text-preset-7">
                    Upload your photo (JPG or PNG, max size: 500KB).
                  </span>
                </div>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}
