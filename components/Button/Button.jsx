"use client";
import Link from "next/link";
import "./Button.css";

import Image from "next/image";
import { cn } from "@/lib/utils";

const Button = ({ label = "View Experiences", color, background }) => {
  return (
    <div
      className={cn(
        `relative  inline-flex w-auto ${
          background ? "bg-accent" : ""
        } items-center justify-center overflow-hidden  btn-container   rounded-full  group `
      )}
    >
      <div className="group-hover:cursor-pointer inline-flex items-center justify-center">
        <span className="bg-accent ease-[cubic-bezier(0.075,0.82,0.165,1)] rounded-full transition-transform duration-500 font-medium group-hover:translate-x-8  btn-content font-space-grotesk text-[1.2rem] text-primary">
          <Link href="/">{label}</Link>
        </span>
        <span
          className={cn(
            `h-15 group-hover:scale-0 transition-transform duration-550 relative rounded-full ${
              color ? "bg-red-50" : "bg-blue-100"
            } justify-center w-15 flex items-center`
          )}
        >
          {/* <ArrowUpRight className="text-black size-8 stroke-[1.5px]" /> */}
          <Image
            src="/arrowUpRight.svg"
            alt="arrow icon"
            width={24}
            height={24}
            className="object-contain group-hover:rotate-45 transition-transform duration-600"
          />
          <div className="absolute group top-0 left-0 w-full h-full rounded-full bg-red-100/20"></div>
        </span>
      </div>
    </div>
  );
};

export default Button;
