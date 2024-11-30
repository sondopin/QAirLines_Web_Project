import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopularLocationCard from "../components/PopularLocationCard";
import LatestNewsCard from "../components/LatestNewsCard";

interface HomeAdminProps {
  // cai nay t chua biet API tra ve du lieu kieu du, structure nhu nao nen de trong tam nhe
  something?: string;
}

/**
 * HomeAdmin component for the admin home page.
 *
 * @component
 * @param {HomeAdminProps} props - The props for the HomeAdmin component.
 * @param {any} props.something - A prop for demonstration purposes.
 *
 * @returns {JSX.Element} The rendered HomeAdmin component.
 *
 * @example
 * <HomeAdmin something={value} />
 *
 * @description
 * This component renders the admin home page with various sections including:
 * - A header
 * - A hero image
 * - Buttons for editing quotes, missions, and news
 * - A mission statement
 * - An upload advertisement section
 * - Latest news section with navigation arrows
 * - A "Why Choose Us" section
 * - Popular locations section
 * - A footer
 */

const HomeAdmin: React.FC<HomeAdminProps> = ({ something }) => {
  console.log(something);

  return (
    <div className="flex flex-col">
      <Header />
      <img
        src="./hero.png"
        alt="Image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <button className="mt-[100px] mx-auto flex flex-row gap-[5px] shadow-lg rounded-[5px] bg-[#EBEBEB] bg-opacity-[50%] px-[5px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200 w-max">
        <img src="./edit_icon.png" alt="" />
        <div className="text-[14px]">Edit Quote and Mission</div>
      </button>

      <div className="flex flex-col gap-[10px] self-center items-center max-w-[600px] text-center">
        <h1 className="text-[#223A60] text-[60px] font-bold">
          Wings to Your World
        </h1>
        <p className="text-[18px] text-[#223A60] opacity-[60%] font-medium">
          Our mission is to connect people and places with safe, reliable, and
          comfortable air travel, delivering exceptional service while
          committing to a sustainable future.
        </p>
      </div>
      <div className="flex flex-col bg-[#FFFFFF] bg-opacity-[30%] rounded-[14px] border-[1px] border-dashed px-[200px] py-[163px] w-[60%] self-center mt-[20px] scale-[0.7]">
        <input type="file" id="upload-ads" className="hidden" />
        <label
          htmlFor="upload-ads"
          className="bg-[#223A60] bg-opacity-[50%] rounded-[14px] px-[40px] py-[15px] shadow-lg text-[#FFFFFF] text-[16px] font-medium w-[50%] self-center text-center hover:scale-[1.05] transform transition-transform duration-200 hover:bg-opacity-[70%]"
        >
          Upload advertisement
        </label>
      </div>
      <h1 className="text-[#283841] font-bold text-[64px] self-center mt-[50px]">
        Lastest News
      </h1>
      <Link to="/edit-home-page">
        <button className="mt-[100px] mx-auto flex flex-row gap-[5px] shadow-lg rounded-[5px] bg-[#EBEBEB] bg-opacity-[50%] px-[5px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200 w-max">
          <img src="./edit_icon.png" alt="Edit icon" />
          <div className="text-[14px]">Edit News</div>
        </button>
      </Link>
      <div className="flex flex-row gap-[30px] w-full mt-[20px] scale-[80%] items-center">
        <img
          src="./left_arrow.png"
          alt="Left arrow"
          className="h-[100px] hover:scale-[1.2] transform transition-transform duration-200"
        />
        <LatestNewsCard
          title="Title with limited letter. Ideally for 2 lines."
          description="Description also with limited character. Ideally for 2 lines"
          image_url="./news.png"
        />
        <LatestNewsCard
          title="Title with limited letter. Ideally for 2 lines."
          description="Description also with limited character. Ideally for 2 lines"
          image_url="./news.png"
        />
        <LatestNewsCard
          title="Title with limited letter. Ideally for 2 lines."
          description="Description also with limited character. Ideally for 2 lines"
          image_url="./news.png"
        />
        <img
          src="./right_arrow.png"
          alt="Right arrow"
          className="h-[100px] hover:scale-[1.2] transform transition-transform duration-200"
        />
      </div>
      {/* Cho nay de tam image, quay lai sua hieu ung sau */}
      <img src="./dots.png" alt="Dots" className="w-[100px] self-center" />
      <div className="flex flex-row self-center w-[90%] mt-[100px] gap-[200px] relative">
        <img src="./why_choose_us_image.png" alt="Why Choose Us" />
        <div className="flex flex-col relative left-[-50px] gap-[20px] bg-[#D8EBFE] rounded-[20px] shadow-lg px-[20px] py-[20px]">
          <h1 className="text-[56px] font-bold text-[#77A0E0]">
            Why Choose Us
          </h1>
          <div className="text-[16px] font-medium text-[#283841] opacity-[60%]">
            Experience the skies like never before with QAirline.
          </div>
          <div className="text-[16px] font-medium text-[#283841]">
            🔷 Enjoy spacious seating, enhanced legroom, and a relaxing
            atmosphere for a truly restful journey.
          </div>
          <div className="text-[16px] font-medium text-[#283841]">
            🔷 We prioritize punctuality, ensuring you arrive at your
            destination on schedule, every time.
          </div>
          <div className="text-[16px] font-medium text-[#283841]">
            🔷 Our friendly, attentive crew is here to make your experience
            smooth and enjoyable from start to finish.
          </div>
          <div className="text-[16px] font-medium text-[#283841]">
            🔷 From gourmet meals to onboard entertainment, we cater to all your
            travel needs.
          </div>
          <p className="text-[16px] text-[#283841] font-medium opacity-[60%]">
            Fly with us and discover why thousands of travelers around the world
            choose QAirline as their preferred airline, where every journey is
            marked by comfort, convenience, and an exceptional level of service
            that redefines your travel experience.
          </p>
        </div>
        <div className="scale-[0.7] absolute top-[-20px] left-[250px]">
          <PopularLocationCard
            image="./popular_location_image.png"
            location="Ha Noi"
            description="Capital city of Viet Nam"
            country="Viet Nam"
            price={2500000}
          />
        </div>
      </div>
      <Link to="/edit-home-page">
        <button className="mt-[100px] mx-auto flex flex-row gap-[5px] shadow-lg rounded-[5px] bg-[#EBEBEB] bg-opacity-[50%] px-[5px] py-[5px] hover:scale-[1.05] transform transition-transform duration-200 w-max">
          <img src="./edit_icon.png" alt="" />
          <div className="text-[14px]">Edit</div>
        </button>
      </Link>
      <h1 className="text-[#00A3FF] text-[56px] font-bold px-[50px]">
        Popular Locations
      </h1>
      <div className="text-[16px] text-[#283841] px-[50px] mb-[50px]">
        Tourist and resort destinations are of interest to many people. You
        should visit once if you have the chance!
      </div>
      <div className="flex flex-row gap-auto px-[50px] gap-[50px] mb-[100px]">
        <PopularLocationCard
          image="./popular_location_image.png"
          location="Ha Noi"
          description="Capital city of Viet Nam"
          country="Viet Nam"
          price={2500000}
        />
        <PopularLocationCard
          image="./popular_location_image.png"
          location="Ha Noi"
          description="Capital city of Viet Nam"
          country="Viet Nam"
          price={2500000}
        />
        <PopularLocationCard
          image="./popular_location_image.png"
          location="Ha Noi"
          description="Capital city of Viet Nam"
          country="Viet Nam"
          price={2500000}
        />
        <PopularLocationCard
          image="./popular_location_image.png"
          location="Ha Noi"
          description="Capital city of Viet Nam"
          country="Viet Nam"
          price={2500000}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomeAdmin;
