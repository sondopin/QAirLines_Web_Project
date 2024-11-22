import React from "react";
import styles from "./Register.module.css";
import InputField from "../../components/InputFeild";
import { registerSchema, Schema } from "../../utils/rule";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { registerAccount } from "../../apis/auth.api";
import { isAxiosUnprocessableEntity } from "../../utils/utils";
import { ErrorResponse } from "../../types/utils.type";
import { Link } from "react-router-dom";

type RegisterForm = Schema;

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      registerAccount(body),
  });

  const onSubmit = handleSubmit((data) => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        console.log("Success Register");
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ErrorResponse<RegisterForm>>(error)) {
          const formError = error.response?.data?.data;
          console.log(error);

          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof RegisterForm, {
                type: "server",
                message: formError[key as keyof RegisterForm],
              });
            });
          }
        }
      },
    });
  });

  return (
    <main className={styles.registerContainer}>
      <div className={styles.registerWrapper}>
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
        <section className={styles.registerForm}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
            alt="Company Logo"
            className={styles.logo}
          />
          <div className={styles.registerTitle}>
            <h1 className={styles.titleLarge}>Create Account</h1>
            <p className={styles.titleSmall}>
              Welcome! Ready For A New Flight!
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
            <InputField
              name="confirm_password"
              type="password"
              placeholder="Confirm Password"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&"
              iconAlt="Password icon"
              styles={styles}
              register={register}
              error={errors.confirm_password?.message}
            />
            <button
              type="submit"
              className={`${styles.button} ${styles.primary}`}
            >
              Register
            </button>
            <Link to="/login">
              <p className={styles.noAccountText}>Already have an account?</p>
              <p className={styles.createAccountLink}>Login</p>
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;
