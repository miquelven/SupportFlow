import { ReactNode } from "react";

export default function LayoutContainer({ children }: { children: ReactNode }) {
  return <div className="container mx-auto pt-8 pl-8">{children}</div>;
}
