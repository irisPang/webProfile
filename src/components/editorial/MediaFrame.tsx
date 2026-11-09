import type { ReactNode } from "react";

type MediaFrameProps = {
  variant?: "ember" | "lilac" | "green" | "plain";
  className?: string;
  children?: ReactNode;
};

const variants = {
  ember: "card-media card-media--ember",
  lilac: "card-media card-media--lilac",
  green: "card-media card-media--green",
  plain: "card-media",
};

export function MediaFrame({ variant = "plain", className = "", children }: MediaFrameProps) {
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
