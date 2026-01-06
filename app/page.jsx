"use client";
import React, { useEffect } from "react";
import "./Home.css";
import Button from "../components/Button/Button";
import AnimateCopy from "../components/AnimatedCopy/AnimateCopy";
import HoverCard from "../components/HoverCard/HoverCard";
import Card from "../components/Card/Card";
import AnimatedTitles from "../components/AnimatedTitles/AnimatedTitles";
import Copy from "../components/Copy/Copy";
import Footer from "../components/Footer/Footer";
import Preloader, { isInitialLoad } from "../components/Preloader/Preloader";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";

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
      <Preloader />
      <section className="hero">
        <div className="hero-inner">
          <div className="absolute  z-5 w-full h-full left-0 right-0 bottom-0 top-0" />
          <div className="hero-img ">
            <video src="/images/paris.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="hero-content z-6">
            <div className="hero-footer justify-between items-end flex w-full h-auto">
              <div className="h-full w-140">
                <Copy
                  animateOnScroll={false}
                  delay={isInitialLoad ? 5.75 : 0.75}
                >
                  <h3 className="">
                    Live the Paris you&apos;ve only seen on screen
                  </h3>
                </Copy>
              </div>
              <div className="w-auto h-full  ">
                <div className=" flex flex-col gap-4  items-centers  h-full w-full ">
                  <div className="">
                    <Copy
                      animateOnScroll={false}
                      delay={isInitialLoad ? 6.35 : 1.65}
                    >
                      <p className="font-medium text-[2rem] w-96">
                        Created for people who dream of Paris- and want to live
                        it, not just visit
                      </p>
                    </Copy>
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
      <section className="h-dvh w-full  p-10!">
        <div className="h-full w-full gap-5 bg-blue-50 rounded-4xl flex flex-col items-center justify-center">
          <div className="w-120">
            <div className="text-center">
              <Copy>
                <h2 className="text-[1.8rem]">Danielle, Netherlands</h2>
              </Copy>
              <Copy>
                <p className="text-center text-[2rem]">
                  It was such a joyful and affirming experience. Thank you,
                  Guillaume, for such a memorable and enriching workshop. We
                  can’t recommend it highly enough!
                </p>
              </Copy>
            </div>
          </div>
          <Button color />
        </div>
      </section>
      <section className="w-full  p-20! text-gallery">
        <div className="text-[3rem] text-center text-dark-100">
          <span className="leading-10 ">
            From
            <Image
              src="/images/bread.avif"
              alt="bread"
              width={100}
              height={100}
              className="inline-flex mx-8!"
            />
            <span className="bg-blue-100 p-1!">croissant-making</span> workshops
            to{" "}
            <Image
              src="/images/town.avif"
              alt="bread"
              width={100}
              height={100}
              className="inline-flex mx-8!"
            />{" "}
            <span className="bg-blue-50 p-1!">champagne Seine cruises,</span>{" "}
            <Image
              src="/images/bread.avif"
              alt="bread"
              width={100}
              height={100}
              className="inline-flex mx-8!"
            />{" "}
            discover <span className="bg-red-50 p-1!">secret street</span> and
            Paris moments à la Emily.
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
