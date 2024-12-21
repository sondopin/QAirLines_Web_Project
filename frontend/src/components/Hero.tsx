import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../constants/path";

interface HeroProps {
  children: ReactNode;
  nums_booking_changed: number;
}

const Hero = ({ children, nums_booking_changed }: HeroProps) => {
  const scrollTo = (id: string) => {
    const newsElement = document.getElementById(id);
    if (newsElement) {
      newsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden relative px-6 py-20 w-full bg-slate-10 min-h-[400px] max-md:px-5 max-md:text-center">
      {/* Background Image */}
      <img
        loading="lazy"
        src="./hero.png"
        alt="Hero Background"
        className="absolute inset-0 object-cover w-full h-full -z-10"
      />

      {/* Children (Flight Details) */}
      <div className="flex flex-col md:flex-row w-full gap-[30px] px-[20px]">
        {/* Hero Content */}
        <div className="flex flex-col items-ce relative mb-16 text-center space-y-6 max-w-4xl px-[40px]">
          <h1 className="text-slate-700 text-5xl font-bold max-md:text-4xl text-left">
            Wings to Your World
          </h1>

          <p className="text-slate-700 text-xl font-medium tracking-wider text-left">
            Our mission is to connect people and places with safe, reliable, and
            comfortable air travel, delivering exceptional service while
            committing to a sustainable future.
          </p>

          <div className="flex flex-col gap-[20px]">
            <button
              onClick={() => scrollTo("news")}
              className="flex flex-row border-t-[5px] border-[#223A60] w-max pr-[70px] bg-[#EAF0F0] bg-opacity-[80%] rounded-full gap-[10px] items-center transition-transform duration-200 ease-in-out hover:scale-[1.1]"
            >
              <img
                src="./news.png"
                alt="News"
                className="w-[50px] h-[50px] rounded-full shadow-lg opacity-[70%] hover:opacity-100"
              />
              <div className="text-[#223A60] text-[16px] font-bold">
                Update latest information
              </div>
            </button>

            <button
              onClick={() => scrollTo("why-choose-us")}
              className="flex flex-row border-t-[5px] border-[#223A60] w-max pr-[70px] bg-[#EAF0F0] bg-opacity-[80%] rounded-full gap-[10px] items-center transition-transform duration-200 ease-in-out hover:scale-[1.1]"
            >
              <img
                src="./why_choose_us_image.png"
                alt="News"
                className="w-[50px] h-[50px] rounded-full shadow-lg opacity-[70%] hover:opacity-100"
              />
              <div className="text-[#223A60] text-[16px] font-bold">
                Why to choose us?
              </div>
            </button>

            <Link
              to={PATH.user.mybooking}
              className="flex flex-row border-t-[5px] border-[#223A60] w-max pr-[30px] bg-[#EAF0F0] bg-opacity-[80%] rounded-full  gap-[10px] items-center justify-center transition-transform duration-200 ease-in-out hover:scale-[1.1]"
            >
              <img
                src="./booking_image.png"
                alt="News"
                className="w-[50px] h-[50px] rounded-full shadow-lg opacity-[70%] hover:opacity-100"
              />
              <div className="text-[#223A60] text-[16px] font-bold">
                Check your bookings{" "}
                {nums_booking_changed > 0 && `(${nums_booking_changed} new)`}
              </div>
            </Link>

            <button
              onClick={() => scrollTo("popular-flights")}
              className="flex flex-row border-t-[5px] border-[#223A60] w-max pr-[20px] bg-[#EAF0F0] bg-opacity-[80%] rounded-full  gap-[10px] items-center justify-center transition-transform duration-200 ease-in-out hover:scale-[1.1]"
            >
              <img
                src="./popular_flights_image.png"
                alt="News"
                className="w-[50px] h-[50px] rounded-full shadow-lg opacity-[70%] hover:opacity-100"
              />
              <div className="text-[#223A60] text-[16px] font-bold">
                Popular flights!
              </div>
            </button>
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default Hero;
