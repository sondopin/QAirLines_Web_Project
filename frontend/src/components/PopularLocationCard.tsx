import React from "react";
import { formatCurrency } from "../utils/utils";

interface PopularLocationCardProps {
  image: string;
  location: string;
  description: string;
  price: number;
  country: string;
}

/**
 * A React functional component that displays a card with popular location details.
 *
 * @param {string} image - The URL of the image to display.
 * @param {string} location - The name of the location.
 * @param {string} description - A brief description of the location.
 * @param {string} price - The price associated with the location.
 * @param {string} country - The country where the location is situated.
 *
 * @returns {JSX.Element} A JSX element representing the popular location card.
 */

const PopularLocationCard: React.FC<PopularLocationCardProps> = ({
  image,
  location,
  description,
  price,
  country,
}) => {
  return (
    <div className="flex flex-col gap-[22px] rounded-[24px] shadow-lg bg-[#D8EBFE] w-full px-[18px] py-[18px] hover:scale-[1.05] transform transition-transform duration-200">
      <img
        src={image}
        alt="Image"
        className="w-[400px] h-[300px] object-cover"
      />
      <div className="text-[20px] font-bold">{location}</div>
      <div className="text-[14px] font-medium opacity-[50%]">{description}</div>
      <hr className="border-dashed border-t-2 border-gray-300 my-4" />
      <div className="flex flex-row">
        <div className="text-[20px] font-bold self-start">
          {formatCurrency(price)}
        </div>
        <div className="flex flex-row ml-auto">
          <img src="./location_icon.png" alt="icon" />
          <div className="text-[18px] font-medium whitespace-nowrap">
            {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLocationCard;
