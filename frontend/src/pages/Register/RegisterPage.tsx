import React from 'react';
import styles from './RegisterPage.module.css';
import { InputField } from './InputField';
import { Button } from './Button';

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
  const inputFields = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/6f65ee10b50ab29f0ff5492c096ffe84447de821f09e1d10aaf19efb848734d5?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&", placeholder: "Email", type: "email" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/03434f74b3429252257449996b419549b6a163ca30aca6ed40fedd91cc48dc52?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&", placeholder: "Password", type: "password" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/64aa3e16d19c2ad3b7806e5247744001203458fda09708a96fdb213b811b080d?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&", placeholder: "Confirm password", type: "password" },
  ];

  return (
    <main className={styles.registerPage}>
      <section className={styles.container}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroSubtitle}>Elevate Your Journey</h2>
            <h1 className={styles.heroTitle}>Discover the</h1>
          </div>
          <p className={styles.heroHighlight}>World</p>
        </div>
        <section className={styles.registerSection}>
          <img src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Company logo" className={styles.logo} />
          <h2 className={styles.registerTitle}>Create Account</h2>
          <p className={styles.registerSubtitle}>Welcome! Ready for a new flight!</p>
          <form className={styles.registerForm}>
            {inputFields.map((field, index) => (
              <InputField
                key={index}
                icon={field.icon}
                placeholder={field.placeholder}
                type={field.type}
              />
            ))}
            <Button text="Register" />
          </form>
        </section>
      </section>
    </main>
  );
};