import React from "react";
import News from "../components/News";
import { PATH } from "../constants/path";
import { NavLink } from "react-router-dom";
import { getLatestBlogs } from "../apis/blogs.api";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";

/**
 * The `NewsList` component renders a list of news articles with a search input.
 *
 * @component
 * @example
 * return (
 *   <NewsList />
 * )
 *
 * @returns {JSX.Element} A React component that displays a list of news articles.
 *
 * @remarks
 * This component uses Tailwind CSS for styling and includes a `Header` and `Footer` component.
 * The search input is sticky and remains at the top of the page while scrolling.
 *
 * @see {@link Header} for the header component.
 * @see {@link Footer} for the footer component.
 * @see {@link News} for the individual news article component.
 */

const NewsList: React.FC = () => {
  const { data: blogs_data = { data: [] }, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getLatestBlogs,
  });

  return (
    <>
      {isLoading ? <Loading /> : null}
      <div className="flex flex-col gap-12 p-4 md:p-8 lg:p-12">
        <div className="fixed inset-0 -z-10 h-screen">
          <video
            src="./cloud_animation_1.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover"
          ></video>
        </div>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="🔎 Search a news"
            className="border border-black border-opacity-20 bg-gray-200 rounded-lg px-4 py-2 shadow-lg w-full max-w-md"
          />
          <NavLink
            to={PATH.admin.upload_news}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
          >
            Upload News
          </NavLink>
        </div>
        <div className="flex flex-col gap-12 w-full">
          {blogs_data.data.map((blog) => (
            <News
              _id={blog._id}
              title={blog.title}
              subtitle={blog.subtitle}
              cover_url={blog.cover_url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
