const Hero = () => {
    return (
      <section className="flex overflow-hidden relative flex-col justify-center items-center px-6 py-20 mt-2.5 w-full text-white min-h-[300px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="./hero.png"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mb-24 ml-28 max-md:mb-10 text-center">
          <h1 className="mt-12 text-slate-700 text-5xl font-bold max-md:max-w-full max-md:text-4xl">
          Wings to Your World
          </h1>
          <p className="mt-4 text-slate-700 text-xl font-medium tracking-wider max-md:max-w-full">
          Our mission is to connect people and places with safe, reliable, and comfortable air travel, delivering 
          exceptional service while committing to a sustainable future.
          </p>
        </div>
      </section>
    );
  };
  
  export default Hero;
  