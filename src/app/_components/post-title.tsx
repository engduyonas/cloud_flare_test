import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="max-w-3xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight mb-6">
      {children}
    </h1>
  );
}
