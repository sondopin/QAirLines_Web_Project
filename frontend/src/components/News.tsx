import React from "react";
import { Link } from "react-router-dom";
import { SRC } from "../constants/src";
import { BlogCard } from "../types/blogs.type";
/**
 * News component displays a news item with a cover image, title, subtitle, and a link to view details.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the news item.
 * @param {string} props.subtitle - The subtitle or brief description of the news item.
 * @param {string} props.cover - The URL of the cover image for the news item.
 * @returns {JSX.Element} The rendered News component.
 */

const News: React.FC<BlogCard> = ({ _id, title, subtitle, cover_url }) => {
  return (
    <div className="flex flex-col md:flex-row w-full scale-[0.85]">
      <img
        src={`${SRC.blog_cover}${cover_url}`}
        alt="Cover image"
        className="w-full md:w-[400px] h-[300px] transform transition-transform duration-200 hover:scale-[1.05]"
      />
      <div className="flex flex-col px-[20px] md:px-[30px] py-[10px] gap-[10px] md:gap-[20px] w-full max-w-full md:max-w-[800px] bg-[#F6FBFF] rounded-[14px] mt-[10px] md:mt-0">
        <div className="text-[30px] md:text-[40px] text-[#223A60] font-bold">
          {title}
        </div>
        <div className="text-[16px] md:text-[20px] text-[#223A60] opacity-[60%]">
          {subtitle}
        </div>
        <Link
          to={`/blog-details/${_id}`}
          className="text-[#0066FF] text-[16px] md:text-[20px] font-medium hover:underline hover:text-[#0047B3] self-end"
        >
          View details {">"}
        </Link>
      </div>
    </div>
  );
};

export default News;
