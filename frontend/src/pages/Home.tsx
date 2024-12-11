import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";
import SearchBarSimple from "../components/SearchBarSimple";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <div className="fixed inset-0 -z-10 h-screen">
        <video
          src="./cloud_animation_2.mp4"
          loop
          autoPlay
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
      <Hero>
        <SearchBar />
      </Hero>
      <div className="sticky top-[-20px] z-50">
        <SearchBarSimple />
      </div>
      <div className="flex flex-col mx-auto items-center justify-center">
        <div id="news"></div>
        <LatestNews />
      </div>
      <div id="why-choose-us"></div>
      <WhyChooseUs />
      <div id="popular-flights"></div>
    </div>
  );
};

export default Home;
