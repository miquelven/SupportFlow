import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto text-lg text-red-600 font-bold">
      <Button />
      <Link href="/contact">contact</Link>
    </div>
  );
}
