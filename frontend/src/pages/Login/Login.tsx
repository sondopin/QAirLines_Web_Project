import React from "react";
import styles from "./Login.module.css";
import InputField from "../../components/InputFeild";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { loginSchema, Schema } from "../../utils/rule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth.api";
import { isAxiosUnprocessableEntity } from "../../utils/utils";
import { ErrorResponse } from "../../types/utils.type";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";


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
  const location = useLocation();
  const { setIsAuthenticated } = useContext(AppContext)

  const onSubmit = handleSubmit((data) => {
    loginMutaion.mutate(data, {
      onSuccess: () => {
        console.log("Success Login");
        setIsAuthenticated(true);
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
    <main className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <section className={styles.loginForm}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
            alt="Company Logo"
            className={styles.logo}
          />
          <div className={styles.loginTitle}>
            <h1 className={styles.titleLarge}>Login to your Account</h1>
            <p className={styles.titleSmall}>
              Welcome back! We're always ready for your flight
            </p>
          </div>
          <form onSubmit={onSubmit}>
            <InputField
              name="email"
              type="text"
              placeholder="Email"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/89d1af211486f8a9cd21fd16209f0d9061374f9e65e163a37e7d9fc23b74a0e0?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
              iconAlt="Email icon"
              styles={styles}
              register={register}
              error={errors.email?.message}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
              iconAlt="Password icon"
              styles={styles}
              register={register}
              error={errors.password?.message}
            />
            <div className={styles.rememberMe}>
              <img
                loading="lazy"
                src="./tickbox_icon.png"
                alt="Remember me icon"
                className={styles.rememberMeIcon}
              />
              <span className={styles.rememberMeText}>Remember me</span>
            </div>
            <button className={`${styles.button} ${styles.primary}`}>
              Login
            </button>
          </form>
          <div className={styles.createAccount}>
            <p className={styles.noAccountText}>Don't have an account?</p>
            <Link to="/register" className={styles.createAccountLink}>
              Create an account
            </Link>
          </div>
        </section>
        <section className={styles.backgroundSection}>
          <img
            className={styles.backgroundImage}
            src="./background.png"
            alt="Background"
          />
          <div className={styles.backgroundContent}>
            <h2 className={styles.elevateText}>Elevate Your Journey</h2>
            <p className={styles.discoverText}>Discover the</p>
          </div>
          <p className={styles.worldText}>World</p>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
