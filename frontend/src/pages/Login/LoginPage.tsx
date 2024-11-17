import React from 'react';
import styles from './LoginPage.module.css';
import InputEmail from '../../components/InputEmail/InputEmail';
import InputPassword from '../../components/InputPassword/InputPassword';
import Button from '../../components/Button/Button';
import RememberMe from '../../components/RememberMe/RememberMe';

const handleSubmit = (email: string) => {
    console.log('Form submitted with email:', email);
}

const LoginPage: React.FC = () => {
  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <section className={styles.loginForm}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Company Logo" className={styles.logo} />
          <div className={styles.loginTitle}>
            <h1 className={styles.titleLarge}>Login to your Account</h1>
            <p className={styles.titleSmall}>Welcome back! We're always ready for your flight</p>
          </div>
          <form>
            <InputEmail onSubmit={handleSubmit}/>
            <InputPassword id='0'/>
            <RememberMe iconSrc='./tickbox_icon.png' altText='Icon'/>
            <Button text='Login' variant='primary'/>
          </form>
          <div className={styles.createAccount}>
            <p className={styles.noAccountText}>Don't have an account?</p>
            <a href="#" className={styles.createAccountLink}>Create an account</a>
          </div>
        </section>
        <section className={styles.backgroundSection}>
            <img className={styles.backgroundImage} src="./login_background.png" alt="Background" />
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