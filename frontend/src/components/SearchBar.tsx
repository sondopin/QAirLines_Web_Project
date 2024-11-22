import * as React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="container mx-auto mt-[-140px] w-5/6">
      <div className="flex flex-col text-base tracking-wider" style={{position: "relative"}}>
        <header className="flex gap-5 justify-center items-center self-start p-7 font-medium text-white whitespace-nowrap rounded-t-3xl bg-slate-200 max-md:px-5">
          <div className="flex overflow-hidden gap-6 justify-center items-center self-stretch px-4 py-1.5 my-auto rounded-md bg-slate-700 min-h-[41px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00ac9e86fa260b6d84ff4fa8b950ea35a52fa989420022f2153547a5a928f465?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]" />
            <span className="self-stretch my-auto">QAF0001</span>
          </div>
        </header>

        <section className="flex flex-col justify-center py-5 w-full text-center rounded-3xl rounded-tl-none bg-slate-200 shadow-[0px_5px_5px_rgba(0,0,0,0.25)] text-slate-800 max-md:max-w-full">
          <form className="flex flex-col">
            <div className="flex flex-wrap gap-2.5 justify-center items-center w-full max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                  <label className="gap-2.5 self-start font-bold">
                  Departure Point
                  </label>
                  <input
                  type="text"
                  placeholder= "Where are you leaving from?"
                  className="self-stretch p-3 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                  aria-label="Departure Point"
                  />
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                  <label className="gap-2.5 self-start font-bold">
                      Departure Date
                  </label>
                  <div className="flex gap-10 justify-between items-center px-3 py-1 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]">
                      <span className="self-stretch my-auto">Choose Dates</span>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7bf55ab7649edc5dda5fcf0ba82ce7cdc0f454abe4df2bdfd7e4fb49719fbb?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                  </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                  <label className="gap-2.5 self-start font-bold">
                  Destination Point
                  </label>
                  <input
                  type="text"
                  placeholder= "Where are you going?"
                  className="self-stretch p-3 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]"
                  aria-label="Destination Point"
                  />
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[280px]">
                  <label className="gap-2.5 self-start font-bold">
                      Return Date
                  </label>
                  <div className="flex gap-10 justify-between items-center px-3 py-1 mt-2 max-w-full font-medium rounded-md bg-slate-800 bg-opacity-10 min-h-[45px] w-[280px]">
                      <span className="self-stretch my-auto">Choose Dates</span>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7bf55ab7649edc5dda5fcf0ba82ce7cdc0f454abe4df2bdfd7e4fb49719fbb?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                  </div>
              </div>
            </div>

            <div className="flex overflow-hidden flex-wrap gap-2 justify-center items-center mt-2 w-full max-md:max-w-full">
              <div className="flex gap-2 self-stretch py-px pl-2 my-auto rounded-md min-w-[240px] w-[458px] max-md:max-w-full">
                  <label className="grow my-auto font-bold">
                      Business class tickets
                  </label>
                  <input 
                  className="gap-2.5 self-stretch p-3 font-medium rounded-md bg-slate-800 bg-opacity-10"
                  placeholder="Number of Tickets"
                  type='number'
                  />
              </div>
              <div className="w-px h-full bg-gray-300"></div>
              <div className="flex gap-2 self-stretch py-px pl-2 my-auto rounded-md min-w-[240px] w-[458px] max-md:max-w-full">
                  <label className="grow my-auto font-bold">
                      Economy class tickets
                  </label>
                  <input 
                  className="gap-2.5 self-stretch p-3 font-medium rounded-md bg-slate-800 bg-opacity-10"
                  placeholder="Number of Tickets"
                  type='number'
                  />
              </div>
            </div>

            <button 
              type="submit"
              className="overflow-hidden gap-2.5 self-center px-10 mt-2 max-w-full font-medium text-white whitespace-nowrap rounded-2xl bg-slate-700 min-h-[40px] shadow-[0px_5px_5px_rgba(0,0,0,0.25)] w-[156px] max-md:px-5"
            >
              Adjust
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;
