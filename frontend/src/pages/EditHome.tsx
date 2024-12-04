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
 * EditHome component allows administrators to edit the home page content.
 *
 * @component
 * @param {HomeAdminProps} props - The properties passed to the component.
 * @param {any} props.something - A placeholder prop for demonstration purposes.
 *
 * @returns {JSX.Element} The rendered EditHome component.
 *
 * @example
 * <EditHome something={value} />
 *
 * @remarks
 * This component includes various sections such as header, image upload, text areas for input,
 * buttons for saving changes, and sections for displaying latest news and popular locations.
 *
 * @todo
 * - Replace placeholder props with actual data.
 * - Add proper validation and error handling for inputs.
 */

const EditHome: React.FC<HomeAdminProps> = ({ something }) => {
  console.log(something);

  return (
    <div className="flex flex-col">
      <Header />
      <img
        src="./hero.png"
        alt="Image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <button className="mb-5 mt-24 mx-auto flex flex-row gap-1 shadow-lg rounded bg-[#223A60] text-white px-10 py-2 hover:scale-105 transform transition-transform duration-200 w-max">
        <div className="text-sm font-semibold">Save changes</div>
      </button>

      <div className="flex flex-col gap-5 self-center items-center w-full max-w-4xl text-center rounded-lg px-4">
        <textarea
          placeholder="Enter something"
          className="text-center bg-transparent text-[#223A60] text-4xl font-bold w-full resize-none border border-black border-opacity-50 border-dashed"
          maxLength={34}
          rows={1}
        />
        <textarea
          placeholder="Enter something"
          className="text-center bg-transparent text-[#223A60] text-lg opacity-60 font-bold w-full resize-none border border-black border-opacity-50 border-dashed"
          maxLength={330}
          rows={3}
        />
      </div>

      <div className="flex flex-col bg-white bg-opacity-30 rounded-lg border border-dashed px-8 py-16 w-4/5 max-w-2xl self-center scale-90">
        <input type="file" id="upload-ads" className="hidden" />
        <label
          htmlFor="upload-ads"
          className="bg-[#223A60] bg-opacity-50 rounded-lg px-10 py-4 shadow-lg text-white text-base font-medium w-1/2 self-center text-center hover:scale-105 transform transition-transform duration-200 hover:bg-opacity-70"
        >
          Upload advertisement
        </label>
      </div>
      <h1 className="text-[#283841] font-bold text-4xl sm:text-5xl md:text-6xl self-center mt-12">
        Latest News
      </h1>
      <Link to="/edit-news">
        <button className="mt-24 mx-auto flex flex-row gap-1 shadow-lg rounded bg-[#EBEBEB] bg-opacity-50 px-1 py-1 hover:scale-105 transform transition-transform duration-200 w-max">
          <img src="./edit_icon.png" alt="Edit icon" />
          <div className="text-sm">Edit News</div>
        </button>
      </Link>
      <div className="flex flex-row gap-7 w-full mt-5 scale-90 items-center justify-center">
        <img
          src="./left_arrow.png"
          alt="Left arrow"
          className="h-24 hover:scale-120 transform transition-transform duration-200"
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
          className="h-24 hover:scale-120 transform transition-transform duration-200"
        />
      </div>
      <img src="./dots.png" alt="Dots" className="w-24 self-center" />
      <div className="flex flex-col md:flex-row self-center w-full max-w-6xl mt-24 gap-10 relative px-4">
        <img
          src="./why_choose_us_image.png"
          alt="Why Choose Us"
          className="w-full md:w-1/2"
        />
        <div className="flex flex-col relative md:left-[-50px] gap-5 bg-[#D8EBFE] rounded-lg shadow-lg px-5 py-5 w-full md:w-1/2">
          <textarea
            placeholder="Enter title"
            className="bg-transparent text-[#77A0E0] text-4xl font-bold w-full resize-none border border-black border-opacity-50 border-dashed"
            maxLength={18}
            rows={1}
          />
          <textarea
            placeholder="Enter subtitle"
            className="bg-transparent text-[#6E808D] text-base font-medium w-full resize-none border border-black border-opacity-50 border-dashed"
            maxLength={180}
            rows={3}
          />
          <textarea
            placeholder="Write something..."
            className="bg-transparent text-[#283841] text-base font-medium w-full resize-none border border-black border-opacity-50 border-dashed"
            maxLength={870}
            rows={13}
          />
        </div>
        <div className="scale-90 absolute top-[-20px] left-[250px] hidden md:block">
          <PopularLocationCard
            image="./popular_location_image.png"
            location="Ha Noi"
            description="Capital city of Viet Nam"
            country="Viet Nam"
            price={2500000}
          />
        </div>
      </div>
      <h1 className="text-[#00A3FF] text-4xl sm:text-5xl md:text-6xl font-bold px-4 mt-24">
        Popular Locations
      </h1>
      <div className="text-base text-[#283841] px-4 mb-12">
        Tourist and resort destinations are of interest to many people. You
        should visit once if you have the chance!
      </div>
      <div className="flex flex-col md:flex-row gap-5 px-4 mb-24">
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

export default EditHome;
