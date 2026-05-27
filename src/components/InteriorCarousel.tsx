"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/assets/interior-reception.png",
    alt: "泡泡尾巴寵物美容明亮接待區",
    label: "接待區",
  },
  {
    src: "/assets/interior-bathing.png",
    alt: "泡泡尾巴寵物美容洗澡護理區",
    label: "洗澡區",
  },
  {
    src: "/assets/interior-styling.png",
    alt: "泡泡尾巴寵物美容修剪造型區",
    label: "造型區",
  },
];

export function InteriorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="feature-photo" aria-label="泡泡尾巴寵物美容店內環境輪播">
      {slides.map((slide, index) => (
        <figure
          className={`carousel-slide${index === activeIndex ? " is-active" : ""}`}
          key={slide.src}
        >
          <Image alt={slide.alt} fill sizes="(max-width: 860px) 100vw, 520px" src={slide.src} />
        </figure>
      ))}
      <div className="carousel-dots" aria-label="切換店內環境照片">
        {slides.map((slide, index) => (
          <button
            aria-label={`切換到${slide.label}照片`}
            className={`carousel-dot${index === activeIndex ? " is-active" : ""}`}
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
