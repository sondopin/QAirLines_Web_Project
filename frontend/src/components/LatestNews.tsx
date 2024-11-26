import Slider from "react-slick";
import LatestNewsCard from "./LatestNewsCard";
import { BlogCard } from "../types/blogs.type";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getLatestBlogs } from "../apis/blogs.api";

const LatestNews = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const { data: blogs_data } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => {
      return getLatestBlogs();
    },
    placeholderData: keepPreviousData,
  });

  return (
    <div className="bg-white justify-center w-2/3">
      <div className="md:max-w-[1480px] md:px-0">
        <div className="py-4">
          <h1 className="text-3xl font-bold justify-center">
            <span className="text-black-600">Latest News</span>
          </h1>
        </div>

        <Slider {...settings} className="gap-5">
          {blogs_data?.data.map((blog: BlogCard, index: number) => (
            <LatestNewsCard
              key={index}
              title={blog.title}
              description={blog.description}
              image_url={blog.image_url}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
