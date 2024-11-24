import { Input } from "antd";
import Ticket from "../components/Ticket";
import InputField from "../components/InputFeild";


const Booking = () => {
    const locations = [
        { code: "HAN", city: "Ha Noi" },
        { code: "SGN", city: "Ho Chi Minh City" }
      ];
    
      const dates = [
        {
            time:"Tue, 22/11/2024",
            hour:"05:00 AM"
        },
        {
            time:"Sat, 25/12/2024",
            hour:"07:10 AM"
        }
    ];
    
      const tickets = [2,3];
    



    return(
        <div>
            <div className="flex flex-row text-center mx-auto mt-20 overflow-hidden flex-wrap gap-14 justify-center items-center py-7 w-full font-bold text-black rounded-3xl bg-slate-200 bg-opacity-90 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
                <div className="flex flex-row flex-wrap flex-1 shrink justify-between items-center self-stretch my-auto basis-0 max-w-[452px] min-w-[320px] max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[200px] min-w-[200px]">
                        <h2 className="text-3xl tracking-widest">{locations[0].code}</h2>
                        <p className="mt-4 text-xl tracking-wider">{locations[0].city}</p>
                    </div>
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c8eaeaaf632188c747159665b41f690effb9db85d1ba6debed68d88ac936c6?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                    alt=""
                    className="object-contain shrink self-stretch aspect-[2.16] basis-0 w-[52px]"
                    />
                    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 max-w-[200px] min-w-[200px]">
                        <h2 className="text-3xl tracking-widest">{locations[1].code}</h2>
                        <p className="mt-4 text-xl tracking-wider">{locations[1].city}</p>
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e762ee6663a4186273daa6127fc4a9dbe66ef847afd8d79aa1a5fd7098b606?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.04] w-[3px]"
                />
                <div className="flex flex-wrap flex-1 shrink gap-5 items-start justify-center self-stretch my-auto text-xl tracking-wider basis-0 max-w-[449px] min-w-[320px] max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink justify-center basis-0 max-w-[209px] min-w-[209px]">
                        <h3>Departure Date</h3>
                        <p className="mt-2.5">{dates[0].time}</p>
                        <p className="mt-2.5">{dates[0].hour}</p>
                    </div>
                    <div className="flex flex-col flex-1 shrink justify-center basis-0 max-w-[209px] min-w-[209px]">
                        <h3>Return Date</h3>
                        <p className="mt-2.5">{dates[1].time}</p>
                        <p className="mt-2.5">{dates[1].hour}</p>
                    </div>
                    
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e762ee6663a4186273daa6127fc4a9dbe66ef847afd8d79aa1a5fd7098b606?placeholderIfAbsent=true&apiKey=cdf4ef6bf30f4b36bc29a527c8e3e010"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.04] w-[3px]"
                />
                <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-xl tracking-wider basis-0 max-w-[369px] min-w-[369px]">
                    <div className="flex items-start w-full">
                        <div className="flex-1 shrink basis-0">Business Tickets</div>
                        <div className="flex-1 shrink basis-0">{tickets[0]}</div>
                    </div>
                    <div className="flex items-start w-full">
                        <div className="flex-1 shrink basis-0">Economy Tickets</div>
                        <div className="flex-1 shrink basis-0">{tickets[1]}</div>
                    </div>
                </div>
            </div>
            <div className="italic mx-20 my-20">
                <p>Please fill in these feilds neccessary information for us. We commits in protecting your information and only use for the flight.</p>
                <p>Feild marked with <span className="text-red-500">*</span> are compulsory.</p>
            </div>
            {tickets[0] > 0 ?(
            <div className="px-10">
                <h2 className="text-bold text-3xl">Business Tickets</h2>
                {Array.from({ length: tickets[0] }, (_, index) => (
                    <div key={index} className="my-5">
                        <Ticket index={index + 1}/>
                    </div>
                ))}
            </div>) :null} 
            {tickets[1] > 0 ?(
            <div className="px-10">
                <h2 className="text-bold text-3xl">Economy Tickets</h2>
                {Array.from({ length: tickets[0] }, (_, index) => (
                    <div key={index} className="my-5">
                        <Ticket index={index + 1}/>
                    </div>
                ))}
            </div>) :null}
            <section className="flex overflow-hidden flex-col justify-center px-24 py-14 text-right text-black max-md:px-5">
                <div className="w-1/5 self-end mb-5">
                    <label className="text-bold">Discount Code</label>
                    <InputField 
                        placeholder="Enter your discount code"
                        name="discount"
                        type="text"
                    />
                </div>

                <h2 className="text-4xl tracking-[2.4px] max-md:max-w-full">
                    Total price:
                </h2>
                <p className="mt-8 text-5xl font-bold tracking-[2.88px] max-md:max-w-full max-md:text-4xl">
                    361,500,000 VND
                </p>
                <p className="mt-8 text-2xl tracking-widest max-md:max-w-full">
                    Total price for all passengers (including taxes, fees and discounts).
                </p>
                <button className="gap-2.5 self-end px-8 py-6 mt-8 text-3xl font-bold tracking-widest text-center text-white whitespace-nowrap rounded-lg bg-slate-700 max-w-[300px] min-h-[93px] w-[300px] max-md:px-5">
                    Next
                </button>
            </section>
        </div>
    );

};


export default Booking;