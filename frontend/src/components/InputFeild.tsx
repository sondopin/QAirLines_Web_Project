/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
  register: any;
  error: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  iconSrc,
  iconAlt,
  register,
  error,
}) => {
  return (
    <div className="rounded-[6px] bg-[rgba(217,217,217,0.5)] shadow-lg flex mt-[50px] w-full items-center gap-2.5 overflow-hidden text-[rgba(34,58,96,0.5)] font-medium whitespace-nowrap leading-[40px] justify-start flex-wrap p-2.5 md:max-w-full md:mt-[40px] md:whitespace-normal">
      <img
        loading="lazy"
        src={iconSrc}
        alt={iconAlt}
        className="aspect-square object-contain object-center w-6 self-stretch my-auto"
      />
      <input
        type={type}
        placeholder={placeholder}
        className="self-stretch flex-1 basis-0 my-auto md:max-w-full"
        aria-label={placeholder}
        {...register(name)}
      />
      <div>{error}</div>
    </div>
  );
};

export default InputField;
