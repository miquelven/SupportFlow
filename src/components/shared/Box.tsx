import { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 rounded-xsxsxs bg-secondary text-secondary-foreground">
      {children}
    </div>
  );
}
