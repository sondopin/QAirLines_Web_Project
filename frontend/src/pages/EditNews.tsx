import React from "react";
import { Link } from "react-router-dom";
import RichTextEditor from "../components/RichTextEditor";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface EditNewsProps {
  title?: string;
  subtitle?: string;
  cover?: string;
  content?: string;
}

/**
 * EditNews component allows editing news articles with a title, subtitle, cover image, and content.
 *
 * @component
 * @param {EditNewsProps} props - The properties for the EditNews component.
 * @param {string} props.title - The title of the news article.
 * @param {string} props.subtitle - The subtitle of the news article.
 * @param {string} props.cover - The cover image URL of the news article.
 * @param {string} props.content - The content of the news article.
 *
 * @returns {JSX.Element} The rendered EditNews component.
 *
 * @example
 * <EditNews
 *   title="Sample Title"
 *   subtitle="Sample Subtitle"
 *   cover="https://example.com/cover.jpg"
 *   content="<p>Sample content</p>"
 * />
 */

const EditNews: React.FC<EditNewsProps> = ({
  title,
  subtitle,
  cover,
  content,
}) => {
  // Tam thoi chua xy ly viec thay doi anh cover, chi cho add them
  console.log(cover);

  return (
    <div className="flex flex-col gap-[50px]">
      <Header />

      <Link to="new-list-admin" className="sticky top-0 w-[160px]">
        <button className="flex flex-row gap-[10px] px-[20px] py-[15px] bg-[#223A60] shadow-lg text-[#FFFFFF] text-[16px] font-semibold transform transition-transform duration-200 hover:scale-[1.05] z-10">
          <img src="./cancel_icon.png" alt="Cancel Icon" />
          <div>Cancel</div>
        </button>
      </Link>

      <div className="flex flex-col bg-[#61A8FA] bg-opacity-[10%] w-full px-[20px] md:px-[50px] lg:px-[100px] xl:px-[200px] py-[60px]">
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[70px]">
          <div className="flex flex-col bg-[#FFFFFF] bg-opacity-[50%] rounded-[14px] border-[1px] border-[#000000] border-dashed px-[20px] py-[50px] lg:py-[163px] w-full lg:w-[350px] h-[350px] min-w-[350px] min-h-[350px] self-center">
            <input type="file" id="upload-ads" className="hidden" />
            <label
              htmlFor="upload-ads"
              className="bg-[#223A60] bg-opacity-[50%] rounded-[14px] px-[10px] py-[15px] shadow-lg text-[#FFFFFF] text-[16px] font-medium w-[50%] self-center text-center hover:scale-[1.05] transform transition-transform duration-200 hover:bg-opacity-[70%]"
            >
              Add photo
            </label>
          </div>

          <div className="flex flex-col gap-[10px] w-full">
            <textarea
              placeholder="Enter title"
              className="w-full bg-transparent text-[#223A60] text-[24px] lg:text-[48px] font-bold resize-none border-[1px] border-[#000000] border-opacity-[50%] border-dashed"
              maxLength={40}
              rows={2}
              value={title}
            />
            <textarea
              placeholder="Enter subtitle"
              className="w-full bg-transparent text-[#223A60] opacity-[70%] text-[16px] lg:text-[24px] font-medium resize-none border-[1px] border-[#000000] border-opacity-[50%] border-dashed"
              maxLength={160}
              rows={5}
              value={subtitle}
            />
          </div>
        </div>

        <div className="text-[#223A60] text-[24px] lg:text-[32px] font-bold my-[50px]">
          Insert content in the Text Editor below
        </div>

        <RichTextEditor initalValue={content} />
      </div>
      <Footer />
    </div>
  );
};

export default EditNews;
