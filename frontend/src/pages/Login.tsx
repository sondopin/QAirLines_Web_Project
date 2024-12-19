import React from "react";
import InputField from "../components/InputFeild";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, Schema } from "../utils/rule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "../apis/auth.api";
import { isAxiosUnprocessableEntity } from "../utils/utils";
import { ErrorResponse } from "../types/utils.type";
import { useContext } from "react";
import { AppContext } from "../context/app.context";
import { getRoleFromLocalStorage } from "../utils/auth";

type LoginForm = Omit<Schema, "confirm_password">;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const loginMutaion = useMutation({
    mutationFn: (body: LoginForm) => login(body),
  });

  const navigate = useNavigate();
  const { setIsAuthenticated, setIsAdmin } = useContext(AppContext);

  const onSubmit = handleSubmit((data) => {
    loginMutaion.mutate(data, {
      onSuccess: () => {
        console.log("Success Login");
        setIsAuthenticated(true);
        const role = getRoleFromLocalStorage();
        setIsAdmin(role === "Admin");
        navigate("/");
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ErrorResponse<LoginForm>>(error)) {
          const formError = error.response?.data?.data;
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof LoginForm, {
                type: "server",
                message: formError[key as keyof LoginForm],
              });
            });
          }
        }
      },
    });
  });

  return (
    <main className="bg-white flex min-w-[320px] items-start overflow-hidden justify-start flex-wrap mx-24 md:p-[100px_20px] scale-[0.85]">
      <div className="rounded-[14px] shadow-lg flex min-w-[240px] w-full justify-center flex-wrap flex-1 basis-0 items-stretch md:max-w-full">
        <section className="rounded-[14px_0_0_14px] bg-[rgba(97,168,250,0.2)] flex min-w-[400px] min-h-[814px] flex-col overflow-hidden tracking-[0.96px] justify-between flex-1 basis-0 text-[16px] md:max-w-full md:p-[0_20px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
            alt="Company Logo"
            className="aspect-[3.1] object-contain object-center w-[300px] max-w-[300px] mt-10"
          />
          <div className="text-[#223a60] font-bold leading-[40px] mt-[40px] md:max-w-full md:mt-[40px]">
            <h1 className="text-[48px] text-[#223a60]">
              Login to your Account
            </h1>
            <p className="font-normal text-[20px] text-[#223a60]">
              Welcome back! We're always ready for your flight
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col">
            <div className="mb-10">
              <InputField
                name="email"
                type="text"
                placeholder="Email"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/89d1af211486f8a9cd21fd16209f0d9061374f9e65e163a37e7d9fc23b74a0e0?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
                iconAlt="Email icon"
                register={register}
                error={errors.email?.message}
              />
            </div>
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
              iconAlt="Password icon"
              register={register}
              error={errors.password?.message}
            />
            <div className="flex items-center gap-2.5 overflow-hidden text-[#223a60] font-medium leading-[40px] justify-start px-2.5 mt-[40px] sm:mt-[40px]">
              <img
                loading="lazy"
                src="./tickbox_icon.png"
                alt="Remember me icon"
              />
              <span>Remember me</span>
            </div>
            <button className="w-1/3 mx-auto rounded-[14px] bg-[#223a60] shadow-lg mt-[30px] min-h-[44px] gap-[10px] text-white font-medium text-center leading-[40px] px-5 lg:whitespace-nowrap lg:mt-[50px]">
              Login
            </button>
          </form>
          <div className="flex flex-col w-full mb-10 items-center gap-2.5 overflow-hidden text-center flex-wrap px-2.5 sm:mt-[30px] sm:px-5">
            <p className="text-[#223a60] font-normal leading-[40px] self-stretch flex-1 basis-[40px] my-auto whitespace-nowrap">
              Don't have an account?
            </p>
            <Link
              to="/register"
              className="text-[#0066ff] font-medium self-stretch flex-1 my-auto px-5 whitespace-nowrap"
            >
              Create an account
            </Link>
          </div>
        </section>
        <section className="rounded-[0_14px_14px_0] flex min-w-[320px] flex-col overflow-hidden flex-1 basis-[60px] p-[217px_0_132px] relative md:max-w-full md:p-[100px_0]">
          <img
            className="w-full h-full absolute top-0 left-0 z-[1]"
            src="./background.png"
            alt="Background"
          />
          <div className="text-black font-bold font-serif px-[17px] pl-[73px] z-[1] mt-20">
            <h2 className="text-[90px] tracking-[2.88px] self-end md:max-w-full md:text-[40px] pl-[80px]">
              Elevate Your Journey
            </h2>
            <p className="text-[100px] tracking-[3.6px] self-start mt-[105px] md:mt-[40px] md:text-[40px]">
              Discover the
            </p>
          </div>
          <p className="text-white font-serif text-[128px] tracking-[7.68px] self-start mt-[38px] ml-[11px] z-[1]">
            World
          </p>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
