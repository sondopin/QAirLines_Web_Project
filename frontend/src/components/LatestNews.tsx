import Slider from "react-slick";
import LatestNewsCard from "./LatestNewsCard";
import { CardProps } from '../types/utils.type';



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

  const cardsData: CardProps[] = [
    {
      title: "Title with limited letter. Ideally for 2 lines.",
      description: "Description also with limited character. Ideally for 2 lines",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4f106385f2afefe8e52a966a195054d604efe0dd4c21a31d14ae11ba95ac57?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
    },
    {
      title: "Title with limited letter. Ideally for 2 lines.",
      description: "Description also with limited character. Ideally for 2 lines",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4f106385f2afefe8e52a966a195054d604efe0dd4c21a31d14ae11ba95ac57?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
    },
    {
      title: "Title with limited letter. Ideally for 2 lines.",
      description: "Description also with limited character. Ideally for 2 lines",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4f106385f2afefe8e52a966a195054d604efe0dd4c21a31d14ae11ba95ac57?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
    },
    {
        title: "ABC",
        description: "DEF",
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d4f106385f2afefe8e52a966a195054d604efe0dd4c21a31d14ae11ba95ac57?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
    }
  ];

  return (
    <div className="w-3/4 bg-white ml-10 p-4">
      <div className="md:max-w-[1480px] m-auto max-w-[800px] md:px-0">
        <div className="py-4">
          <h1 className="text-3xl font-bold justify-center">
            <span className="text-black-600">Latest News</span>
          </h1>
        </div>

        <Slider {...settings}>
            {cardsData.map((card, index) => (
                <LatestNewsCard
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
