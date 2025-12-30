"use client";
import React, { useEffect } from "react";
import "./Home.css";
import Button from "../components/Button/Button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="absolute  z-5 w-full h-full left-0 right-0 bottom-0 top-0" />
        <div className="hero-img ">
          <video src="/images/paris.mp4" autoPlay loop muted playsInline />
        </div>

        <div className="hero-content z-6">
          <div className="hero-footer justify-between items-end flex w-full h-auto">
            <div className="h-full w-160">
              <h3 className="">
                Live the Paris you&apos;ve only seen on screen
              </h3>
            </div>
            <div className="w-auto h-full  ">
              <div className=" flex flex-col gap-4  items-centers  h-full w-full ">
                <div className="">
                  <p className="font-medium text-[2.2rem] w-96">
                    Created for people who dream of Paris- and want to live it,
                    not just visit
                  </p>
                </div>
                <div>
                  <Button color="Red" background />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
