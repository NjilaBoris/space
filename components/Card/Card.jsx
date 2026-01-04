"use client";
import React, { useRef } from "react";
import Button from "../Button/Button";
import "./Card.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cards } from "./index.js";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Card = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section
      className="h-[300dvh] px-10! py-5!  flex  flex-col gap-20  w-full"
      ref={container}
    >
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="sticky-card  rounded-[2.063rem] h-[85dvh]  relative overflow-hidden">
            <div className=" w-full  absolute top-0 left-0 h-full ">
              <video
                autoPlay
                muted
                loop
                className="card-video w-full h-full aspect-video object-cover"
                src={card.backgroundVideo}
              ></video>
            </div>
            <div className="card-content  w-full absolute bottom-0  text-white">
              <div className="px-20! pb-10! flex justify-between">
                <div className="flex flex-col gap-2">
                  <div
                    className={`${
                      index > 0 ? "bg-blue-100" : "bg-red-50"
                    } w-fit`}
                  >
                    <h3 className="text-dark-200! card-heading uppercase text-[0.9rem]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[5rem] card-sub-heading w-150 leading-20">
                    {card.copy}
                  </p>
                  <div className="card-details text-dark-200! inline-flex gap-1 text-2xl">
                    <span
                      className={`${
                        index > 0 ? "bg-blue-100" : "bg-red-50"
                      } py-2! px-5! rounded-full`}
                    >
                      {card.time}
                    </span>
                    <span
                      className={`${
                        index > 0 ? "bg-blue-100" : "bg-red-50"
                      } py-2! px-5! rounded-full`}
                    >
                      {card.price}
                    </span>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button color />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
