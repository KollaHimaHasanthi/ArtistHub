import { useState } from 'react';
import { useRouter } from 'next/router';
import { Mail, Phone, User, Lock, Eye, EyeOff, ArrowRight, Palette, Users, Building2 } from 'lucide-react';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false,
    },
  };
}
