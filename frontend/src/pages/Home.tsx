import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import SearchBar from "../components/SearchBar";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto mt-[-140px] w-5/6">
        <SearchBar />
      </div>
      <LatestNews />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
