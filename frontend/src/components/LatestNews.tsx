import React, { useRef } from "react";
import Slider from "react-slick";
import LatestNewsCard from "./LatestNewsCard";
import { BlogCard } from "../types/blogs.type";
import { useQuery } from "@tanstack/react-query";
import { getLatestBlogs } from "../apis/blogs.api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRC } from "../constants/src";

const LatestNews = () => {
  const sliderRef = useRef<Slider>(null); // Tham chiếu đến slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const { data: blogs_data = { data: [] } } = useQuery({
    queryKey: ["blogs"],
    queryFn: getLatestBlogs,
  });

  const handleNext = () => sliderRef.current?.slickNext(); // Xử lý khi nhấn nút Next
  const handlePrev = () => sliderRef.current?.slickPrev(); // Xử lý khi nhấn nút Previous

  return (
    <div className="flex flex-col bg-[#EAF0F0] bg-opacity-[20%] w-2/3 mt-[50px] rounded-[20px] px-[60px] py-[30px] border-t-[5px] border-b-[5px] border-blue-200 shadow-inner shadow-lg">
      <div className="md:max-w-[148</div>0px] md:px-0">
        <div className="py-4 text-center">
          <h1 className="text-[60px] font-bold">
            <span className="text-[#283841]">Latest News</span>

          </h1>
        </div>

        <div className="relative">
          {/* <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10"
          >
            Next
          </button> */}

          <Slider ref={sliderRef} {...settings} className="gap-5">
            {blogs_data.data.map((blog: BlogCard, index: number) => (
              <LatestNewsCard
                _id={blog._id}
                key={index}
                title={blog.title}
                subtitle={blog.subtitle}
                cover_url={`${SRC.blog_cover}${blog.cover_url}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
