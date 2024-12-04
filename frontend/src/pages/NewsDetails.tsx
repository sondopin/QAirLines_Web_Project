import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface NewsDetailsProps {
  title: string;
  subtitle: string;
  cover: string;
  content: string;
}

/**
 * Component for displaying the details of a news article.
 *
 * @component
 * @param {NewsDetailsProps} props - The properties for the NewsDetails component.
 * @param {string} props.title - The title of the news article.
 * @param {string} props.subtitle - The subtitle of the news article.
 * @param {string} props.cover - The URL of the cover image for the news article.
 * @param {string} props.content - The HTML content of the news article.
 *
 * @returns {JSX.Element} The rendered NewsDetails component.
 *
 * @example
 * <NewsDetails
 *   title="Breaking News"
 *   subtitle="Latest updates on the situation"
 *   cover="https://example.com/cover.jpg"
 *   content="<p>This is the content of the news article.</p>"
 * />
 */

const NewsDetails: React.FC<NewsDetailsProps> = ({
  title,
  subtitle,
  cover,
  content,
}) => {
  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <Header />
      <Link
        to="/news-list"
        className="flex flex-row gap-2.5 px-5 py-3.5 bg-[#223A60] items-center w-40 h-10 shadow-lg hover:scale-105 transition-transform duration-200"
      >
        <img src="./back_icon.png" alt="Back icon" className="w-6 h-6" />
        <div className="text-white text-lg font-bold">Back</div>
      </Link>
      <div className="flex flex-col gap-16 md:gap-20 px-5 md:px-20 lg:px-40 py-10 md:py-16 lg:py-20 bg-[#E8F3FF] w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
          <img
            src={cover}
            alt="Cover"
            className="w-full md:w-80 lg:w-96 h-auto"
          />
          <div className="flex flex-col gap-10 md:gap-16">
            <div className="text-[#223A60] text-3xl md:text-4xl lg:text-5xl font-bold w-full">
              {title}
            </div>
            <div className="text-[#223A60] opacity-60 font-medium text-lg md:text-xl lg:text-2xl w-full"></div>
            <div className="text-[#223A60] opacity-[60%] font-medium text-lg md:text-xl lg:text-2xl w-full">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="text-[#223A60] opacity-60 font-medium text-lg md:text-xl lg:text-2xl w-full">
          {subtitle}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetails;
