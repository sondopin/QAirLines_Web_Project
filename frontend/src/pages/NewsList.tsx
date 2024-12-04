import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";

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
  return (
    <div className="flex flex-col gap-12 p-4 md:p-8 lg:p-12">
      <Header />
      <input
        type="text"
        placeholder="🔎 Search a news"
        className="sticky top-0 self-center border border-black border-opacity-20 bg-gray-200 rounded-lg px-4 py-2 shadow-lg w-full max-w-md z-10"
      />
      <div className="flex flex-col gap-12 w-full">
        <News
          title="Notes when taking the flight"
          subtitle="Please note the procedures and rules that must be followed on the flight to ensure safety and a great experience!"
          cover="./cover.png"
        />
        <News
          title="Notes when taking the flight"
          subtitle="Please note the procedures and rules that must be followed on the flight to ensure safety and a great experience!"
          cover="./cover.png"
        />
        <News
          title="Notes when taking the flight"
          subtitle="Please note the procedures and rules that must be followed on the flight to ensure safety and a great experience!"
          cover="./cover.png"
        />
        <News
          title="Notes when taking the flight"
          subtitle="Please note the procedures and rules that must be followed on the flight to ensure safety and a great experience!"
          cover="./cover.png"
        />
        <News
          title="Notes when taking the flight"
          subtitle="Please note the procedures and rules that must be followed on the flight to ensure safety and a great experience!"
          cover="./cover.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default NewsList;
