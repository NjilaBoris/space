"use client";
import React, { useEffect } from "react";
import "./Home.css";
import Button from "../components/Button/Button";
import AnimateCopy from "../components/AnimatedCopy/AnimateCopy";
import HoverCard from "../components/HoverCard/HoverCard";
import Card from "../components/Card/Card";
import AnimatedTitles from "../components/AnimatedTitles/AnimatedTitles";

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
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="absolute  z-5 w-full h-full left-0 right-0 bottom-0 top-0" />
          <div className="hero-img ">
            <video src="/images/paris.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="hero-content z-6">
            <div className="hero-footer justify-between items-end flex w-full h-auto">
              <div className="h-full w-140">
                <h3 className="">
                  Live the Paris you&apos;ve only seen on screen
                </h3>
              </div>
              <div className="w-auto h-full  ">
                <div className=" flex flex-col gap-4  items-centers  h-full w-full ">
                  <div className="">
                    <p className="font-medium text-[2rem] w-96">
                      Created for people who dream of Paris- and want to live
                      it, not just visit
                    </p>
                  </div>
                  <div>
                    <Button color background />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-description intro h-dvh w-full flex items-center justify-center">
        <div className="flex flex-col  items-center justify-center text-center gap-8">
          <span className="text-sm p-2! bg-blue-100 uppercase tracking-wide">
            Explore at your own pace
          </span>

          <div className="w-95 home-content text-dark-100">
            <AnimateCopy>
              <span className="text-4xl text-center  md:text-[4.5rem] font-medium">
                Unlock The Emily in Paris Experiences
              </span>
            </AnimateCopy>
          </div>

          <Button background color />
        </div>
      </section>
      <Card />
      <AnimatedTitles titles={["Walking Tour"]} />
      <HoverCard />
    </>
  );
};

export default page;
