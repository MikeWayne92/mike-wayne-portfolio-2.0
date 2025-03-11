"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Local cn function to avoid import errors
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = React.useState(false);

  // Set the initial text immediately after component mounts
  React.useEffect(() => {
    if (text1Ref.current && !mounted) {
      text1Ref.current.textContent = texts[0];
      text1Ref.current.style.opacity = "100%";
      text1Ref.current.style.filter = "";
      
      if (text2Ref.current) {
        text2Ref.current.textContent = texts[1 % texts.length];
        text2Ref.current.style.opacity = "0%";
      }
      
      setMounted(true);
    }
  }, [texts, mounted]);

  React.useEffect(() => {
    if (!mounted) return;
    
    let textIndex = 0;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    // Start the animation after a slight delay
    const startTimeout = setTimeout(() => {
      function animate() {
        requestAnimationFrame(animate);
        const newTime = new Date();
        const shouldIncrementIndex = cooldown > 0;
        const dt = (newTime.getTime() - time.getTime()) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex = (textIndex + 1) % texts.length;
            if (text1Ref.current && text2Ref.current) {
              text1Ref.current.textContent = texts[textIndex % texts.length];
              text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
            }
          }
          doMorph();
        } else {
          doCooldown();
        }
      }

      const animationId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationId);
      };
    }, 1000); // Delay before starting the animation cycle

    return () => {
      clearTimeout(startTimeout);
    };
  }, [texts, morphTime, cooldownTime, mounted]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-4xl font-bold md:text-[48pt]",
            "text-white leading-tight tracking-wider whitespace-pre-line",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-4xl font-bold md:text-[48pt]",
            "text-white leading-tight tracking-wider whitespace-pre-line",
            textClassName
          )}
        />
      </div>
    </div>
  );
} 