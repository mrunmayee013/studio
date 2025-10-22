import React from 'react';

export function LandingSection() {
  return (
    <section className="text-center space-y-3">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
        Alex Doe
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground">
        UI/UX Designer | Figma Enthusiast
      </p>
      <p className="max-w-2xl text-base md:text-lg text-foreground/90 pt-2">
        Designing intuitive digital experiences that connect users and ideas.
      </p>
    </section>
  );
}
