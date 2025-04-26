"use client";
import Door from "@/components/home/door";
import Moon from "@/components/home/moon";
import Sun from "@/components/home/sun";
import VoirLogo from "@/components/home/voir-logo";
import gsap from "gsap";
import { useRef } from "react";
import BackgroundTransition from "../components/home/background-transition";
import NewsletterForm from "../components/home/newsletter-form";

export default function Home() {
  const buttonRef = useRef(null);
  const containerRef = useRef(null);
  const handleClick = () => {
    const door = buttonRef.current as HTMLDivElement | null;
    const container = containerRef.current as HTMLDivElement | null;

    gsap.to(door, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        if (!door || !container) return;

        const letters = container.querySelectorAll("[data-letter]");
        const scribbleWrapper = container.querySelector("#scribble-wrapper");
        const bg = document.querySelector("#background-transition");
        door.style.display = "none";
        container.classList.remove("hidden");
        console.log(letters, scribbleWrapper);

        gsap.to(container, { opacity: 1, duration: 1 });
        gsap.fromTo(
          container.querySelector("#upper-text"),
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.5, delay: 1.2 }
        );
        gsap.fromTo(
          container.querySelector("#lower-text"),
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, delay: 1.2 }
        );
        gsap.to(bg, { opacity: 1, duration: 1, delay: 0.2 });

        if (scribbleWrapper) {
          gsap.to(scribbleWrapper, {
            width: "100%", // Or set an exact width in px if necessary
            duration: 1.5,
            ease: "power2.out",
          });
        }

        letters?.forEach((el, i) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: -50 },
            {
              opacity: 1,
              y: 0,
              delay: i * 0.3,
              duration: 0.5,
              ease: "power3.out",
            }
          );
        });
      },
    });
  };

  return (
    <section className="h-full w-full relative">
      <div
        className="w-full h-screen flex flex-col items-center justify-center"
        ref={buttonRef}
      >
        <Sun />
        <div onClick={handleClick}>
          <Door />
        </div>
        <Moon />
      </div>

      <div
        className="w-full h-screen hidden"
        ref={containerRef}
      >
        <BackgroundTransition />
        <VoirLogo />
        <NewsletterForm />
      </div>
    </section>
  );
}
