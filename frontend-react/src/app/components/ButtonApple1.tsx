'use client';

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonApple1 {
  href: string;
  children: ReactNode;
}

export default function ButtonApple1({ href, children }: ButtonApple1) {
  return (
    <Link
      href={href}
      className="block mx-auto bg-[#0071e3] text-white text-[17px] font-normal px-6 py-2 rounded-full transition duration-300 ease-[cubic-bezier(0,0,0.5,1)] hover:bg-[#1488f5]"
    >
      {children}
    </Link>
  );
}
