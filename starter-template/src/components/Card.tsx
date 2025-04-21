import { twMerge } from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-pink-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ; p-6 ",
        className
      )}
    >
      {children}
    </div>
  );
};
