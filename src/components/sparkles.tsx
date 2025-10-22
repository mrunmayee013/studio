"use client";

import React, { useEffect, useState } from 'react';

const SPARKLE_COUNT = 20;

export function Sparkles() {
  const [sparkles, setSparkles] = useState<
    {
      id: number;
      top: string;
      left: string;
      animationDelay: string;
      animationDuration: string;
      translateX: string;
      translateY: string;
    }[]
  >([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: SPARKLE_COUNT }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
        translateX: `${-50 + Math.random() * 100}px`,
        translateY: `${-50 + Math.random() * 100}px`,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: sparkle.animationDelay,
            animationDuration: sparkle.animationDuration,
            // @ts-ignore
            '--tw-translate-x': sparkle.translateX,
            '--tw-translate-y': sparkle.translateY,
          }}
        />
      ))}
    </div>
  );
}
