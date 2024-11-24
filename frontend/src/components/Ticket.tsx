import InputField from "./InputFeild";
import React from "react";

interface TicketProps {
    index: number;
}

const Ticket : React.FC<TicketProps> = ({ index }) => {

return (
<div className="flex flex-col text-base tracking-wider">
    <div className="flex gap-5 justify-center items-center self-start font-medium text-white rounded-t-2xl bg-blue-400 bg-opacity-20 max-md:px-5">
        <div className="overflow-hidden gap-6 self-stretch px-4 py-2.5 my-auto rounded-md bg-slate-700 min-h-[41px]">
            Ticket {index}
        </div>
    </div>
    <form className="flex flex-wrap gap-16 justify-center items-end p-5 w-full rounded-none bg-blue-400 bg-opacity-20 max-md:max-w-full">
        <div className="flex flex-col flex-wrap flex-1 shrink gap-10 justify-center items-center basis-0 min-w-[400px] max-md:max-w-full">
            <div className="flex flex-row gap-24">
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[332px]">
                    <div>
                        <label className="text-bold"><span className="text-red-500">*</span>Date Of Birth</label>
                        <InputField
                            name="dob"
                            type="date"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce385d658fbd834def423915951db0557781615d35409c8290f0db31a6cb6e9?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                            placeholder="Choose A Date"
                        />
                    </div>
                    <div className="mt-8">
                        <label><span className="text-red-500">*</span>Name</label>
                        <InputField
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[332px]">
                    <div>
                        <label><span className="text-red-500">*</span>Nationality</label>
                        <InputField
                            name="nationality"
                            type="text"
                            placeholder="Enter your nationality"
                        />
                    </div>
                    <div className="mt-8">
                        <label><span className="text-red-500">*</span>Phone Number</label>
                        <InputField
                            name="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[332px]">
                    <div>
                        <label>Email</label>
                        <InputField
                            name="email"
                            type="email"
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d6883dff53d98bb77df416271829f25cb33e122bc430c6283f9fb6f322271503?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                            placeholder="Email"
                        />
                    </div>  
                    <div className="mt-8">
                        <label><span className="text-red-500">*</span>Passport Number</label>
                        <InputField
                            name="passport"
                            type="text"
                            placeholder="Enter your passport number"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/7 shrink justify-center text-center text-white whitespace-nowrap basis-0">
                <button className="gap-2.5 self-stretch px-8 py-3 w-full rounded-lg bg-slate-700 min-h-[48px] max-md:px-5">
                    Clear
                </button>
            </div>
        </div>
    </form>
</div>
);
};
export default Ticket;