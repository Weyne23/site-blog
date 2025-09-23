import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-slate-500">
      <Header />
    </div>
  );
}
