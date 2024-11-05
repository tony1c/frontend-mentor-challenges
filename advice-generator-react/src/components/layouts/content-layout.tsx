import { PropsWithChildren } from "react";

export const ContentLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container mx-auto h-screen">
      <div className="flex justify-center">{children}</div>
    </div>
  );
};
