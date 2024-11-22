import Search from "antd/es/transfer/search";
import LatestNews from "../components/LatestNews";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-10">   
            <LatestNews/>
            <WhyChooseUs />
        </div>
    );
}


export default Home;    