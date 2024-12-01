import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <Hero>
        <SearchBar />
      </Hero>
      <div className="flex flex-col mx-auto items-center justify-center">
        <LatestNews />
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default Home;
