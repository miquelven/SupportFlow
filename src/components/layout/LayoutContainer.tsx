import { ReactNode } from "react";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return <div className="container mx-auto pt-8 px-8">{children}</div>;
}
