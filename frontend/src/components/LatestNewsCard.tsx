import { BlogCard } from "../types/blogs.type";

const LatestNewsCard = ({ title, description, image_url }: BlogCard) => {
  return (
    <article className="flex overflow-hidden relative flex-col justify-center mx-5 items-start bg-white rounded-2xl min-w-[200px] shadow-[0px_5px_5px_rgba(0,0,0,0.25)]">
      <img
        loading="lazy"
        src={image_url}
        alt={title}
        className="object-contain z-0 self-stretch w-full aspect-[0.96]"
      />
      <div className="flex absolute right-0 bottom-0 z-0 max-w-full bg-slate-700 bg-opacity-80 h-1/2 w-full" />
      <div className="flex absolute left-2 z-0 flex-col max-w-full bottom-[31px]">
        <h2 className="text-3xl tracking-widest max-md:max-w-full text-white">
          {title}
        </h2>
        <p className="mt-3 text-base tracking-wider max-md:max-w-full text-white">
          {description}
        </p>
      </div>
    </article>
  );
};

export default LatestNewsCard;
