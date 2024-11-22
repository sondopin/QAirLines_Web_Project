import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <div className="container mx-auto mt-[-150px] w-5/6">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center">
        <LatestNews />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Home;
