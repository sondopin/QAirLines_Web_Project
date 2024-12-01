import { ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

const Hero = ({ children }: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden relative px-6 py-20 w-full bg-slate-10 min-h-[400px] max-md:px-5 max-md:text-center">
      {/* Background Image */}
      <img
        loading="lazy"
        src="./hero.png"
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Hero Content */}
      <div className="flex flex-col items-center relative mb-16 text-center space-y-6 max-w-4xl">
        <h1 className="text-slate-700 text-5xl font-bold max-md:text-4xl">
          Wings to Your World
        </h1>
        <p className="text-slate-700 text-xl font-medium tracking-wider">
          Our mission is to connect people and places with safe, reliable, and
          comfortable air travel, delivering exceptional service while
          committing to a sustainable future.
        </p>
      </div>

      {/* Children (Flight Details) */}
      <div className="w-full">{children}</div>
    </section>
  );
};

export default Hero;
