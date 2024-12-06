import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../apis/blogs.api";
import { SRC } from "../constants/src";

const NewsDetails: React.FC = () => {
  const param = useParams();
  const { data: blog } = useQuery({
    queryKey: ["blog", param.id],
    queryFn: () => getBlogById(param.id as string),
  });

  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <div className="flex flex-col gap-16 md:gap-20 px-5 md:px-20 lg:px-40 py-10 md:py-16 lg:py-20 bg-[#E8F3FF] w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          <img
            src={`${SRC.blog_cover}${blog?.data.cover_url}`}
            alt="Cover"
            className="w-full md:w-80 lg:w-96 h-auto"
          />
          <div className="flex flex-col gap-10 md:gap-16">
            <div className="text-[#223A60] text-3xl md:text-4xl lg:text-5xl font-bold w-full">
              {blog?.data.title}
            </div>
            <div className="text-[#223A60] opacity-60 font-medium text-lg md:text-xl lg:text-2xl w-full"></div>
            <div className="text-[#223A60] opacity-[60%] font-medium text-lg md:text-xl lg:text-2xl w-full">
              {blog?.data.subtitle}
            </div>
          </div>
        </div>
        <div className="text-[#223A60] opacity-60 font-medium text-lg md:text-xl lg:text-2xl w-full">
          {blog?.data.subtitle}
        </div>
        <div dangerouslySetInnerHTML={{ __html: blog?.data.content || "" }} />
      </div>
    </div>
  );
};

export default NewsDetails;
