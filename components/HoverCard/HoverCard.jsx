"use client";
import Image from "next/image";
import "./HoverCard.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const HoverCard = () => {
  useGSAP(() => {
    const projects = gsap.utils.toArray(".project");
    const thumbnails = gsap.utils.toArray(".thumbnail");
    const projectThumbnail = document.querySelector(".project-thumbnail");
    const projectsContainer = document.querySelector(".projects");
    gsap.set(projectThumbnail, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(projectThumbnail, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(projectThumbnail, "y", {
      duration: 0.4,
      ease: "power3.out",
    });
    projectsContainer.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
    projectsContainer.addEventListener("mouseleave", () => {
      gsap.to(projectThumbnail, {
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    projects.forEach((project, index) => {
      project.addEventListener("mouseenter", () => {
        gsap.to(projectThumbnail, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(thumbnails, {
          yPercent: -100 * index,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });
  }, []);
  return (
    <div>
      <div className="project-thumbnail">
        <div className="thumbnail p-2! bg-red-50">
          <Image src="/images/img2.jpg" alt="" width={300} height={100} />
        </div>
        <div className="thumbnail p-2! bg-blue-50">
          <Image src="/images/img7.jpg" alt="" width={300} height={100} />
        </div>
        <div className="thumbnail p-2! bg-green-50">
          <Image src="/images/img5.jpg" alt="" width={300} height={100} />
        </div>
      </div>
      <div className="w-full h-full p-10! flex flex-col relative">
        <div className="projects">
          <div className="project group relative">
            <div className="absolute w-full top-0 left-0 h-0 group-hover:h-full bg-red-50 transition-all  duration-300" />
            <div className="group-hover:translate-x-15  transition-transform duration-300">
              <h2>Walk in the footsteps of Emily</h2>
              <div className="inline-flex uppercase project-details">
                <div className="project-description">
                  <span>Walking Tours</span>
                </div>
                <div className="project-description">
                  <span>2.5Hours</span>
                </div>
                <div className="project-description">
                  <span>from 50$</span>
                </div>
              </div>
            </div>
            <div className="border group-hover:-translate-x-15 duration-300 border-dark-200 rounded-full p-5!">
              <Image
                src="/arrowUpRight.svg"
                alt="arrow icon"
                width={24}
                height={24}
                className="object-contain group-hover:rotate-45 transition-transform duration-600"
              />
            </div>
          </div>
          <div className="project group relative">
            <div className="absolute w-full top-0 left-0 h-0 group-hover:h-full bg-blue-50 transition-all  duration-300" />
            <div className="group-hover:translate-x-15 transition-transform duration-300">
              <h2>Croissant-Making Workshop</h2>
              <div className="inline-flex uppercase project-details">
                <div className="project-description">
                  <span>Walking Tours</span>
                </div>
                <div className="project-description">
                  <span>2.5Hours</span>
                </div>
                <div className="project-description">
                  <span>from 75$</span>
                </div>
              </div>
            </div>
            <div className="border group-hover:-translate-x-15 duration-300 border-dark-200 rounded-full p-5!">
              <Image
                src="/arrowUpRight.svg"
                alt="arrow icon"
                width={24}
                height={24}
                className="object-contain group-hover:rotate-45 transition-transform duration-400"
              />
            </div>
          </div>
          <div className="project group border-b  border-dark-200 relative">
            <div className="absolute w-full top-0 left-0 h-0 group-hover:h-full bg-blue-50 transition-all  duration-300" />
            <div className="group-hover:translate-x-15 transition-transform duration-300">
              <h2>Macaron-Making Workshop</h2>
              <div className="inline-flex uppercase project-details">
                <div className="project-description">
                  <span>Walking Tours</span>
                </div>
                <div className="project-description">
                  <span>2.5Hours</span>
                </div>
                <div className="project-description">
                  <span>from 150$</span>
                </div>
              </div>
            </div>
            <div className="border group-hover:-translate-x-15 duration-300 border-dark-200 rounded-full p-5!">
              <Image
                src="/arrowUpRight.svg"
                alt="arrow icon"
                width={24}
                height={24}
                className="object-contain group-hover:rotate-45 transition-transform duration-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
