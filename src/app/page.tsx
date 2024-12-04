'use client';
import Image from "next/image";
import NavbarComponent from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";
import HeroSection from "@/components/HeroSetion";

export default function Home() {
  return (
    <NextUIProvider>
      <NavbarComponent />
      <HeroSection/>
    </NextUIProvider>
  );
}
