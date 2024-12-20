import { useQuery } from "@tanstack/react-query";
import { getPopularPlaces } from "../apis/flight.api";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";
import SearchBarSimple from "../components/SearchBarSimple";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularLocationCard from "../components/PopularLocationCard";
import { PopularPlace } from "../types/flight.type";

const Home = () => {
  const { data: popularPlaces = { data: [] } } = useQuery({
    queryKey: ["popularPlaces"],
    queryFn: () => getPopularPlaces(),
  });

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
      <div id="popular-flights" className="flex flex-row items-center p-5">
        {popularPlaces.data.map((place: PopularPlace) => (
          <PopularLocationCard
            key={place.city}
            image="./hanoi.png"
            location={place.city}
            price={place.cheapest_price}
            description=""
            country={place.country}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
