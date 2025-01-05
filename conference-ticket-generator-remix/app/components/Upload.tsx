import { ChangeEvent, useRef, useState } from "react";

interface UploadProps {
  onAvatarChange: (avatarUrl: string | null) => void;
}

export const Upload = ({ onAvatarChange }: UploadProps) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
      onAvatarChange(newAvatar);
      console.log("Avatar selected!");
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.dataTransfer?.files[0];

    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
      onAvatarChange(newAvatar);
      console.log("File dragged successfully");
    }
  };

  const handleChangeImage = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setAvatar(null);
    onAvatarChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="h-[190px] space-y-150">
      <label className="text-preset-5" htmlFor="file">
        Upload Avatar
      </label>
      {/* bg decoration */}
      <div className="group relative flex h-[126px] flex-col items-center justify-center overflow-hidden rounded-12 border border-dashed border-c-neutral-500 bg-c-neutral-0 bg-opacity-[8%] backdrop-blur-[5px] transition-all duration-300 hover:bg-opacity-20">
        {/* input */}
        {/* trick to hide and get the cursor pointer text-[0px] */}
        <input
          type="file"
          name="file"
          id="file"
          accept=".jpg, .png"
          onChange={(e) => handleFileUpload(e)}
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => e.preventDefault()}
          ref={fileInputRef}
          className={`absolute inset-0 z-10 cursor-pointer text-[0px] opacity-0 ${avatar && "pointer-events-none"}`}
          required
        />
        {!avatar ? (
          // upload icon
          <div className="flex flex-col items-center justify-center gap-200">
            <button className="flex size-[50px] items-center justify-center rounded-12 border border-c-neutral-700 bg-c-neutral-0 bg-opacity-10 shadow-dropshadow-icon transition-opacity duration-300 group-hover:opacity-40">
              <img src="/images/icon-upload.svg" alt="Upload icon" />
            </button>
            <span className="text-preset-6 text-c-neutral-300">
              Drag and drop or click to upload
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-200">
            <div className="size-[50px] overflow-hidden rounded-12 border border-c-neutral-500 shadow-dropshadow-icon">
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
  );
};
