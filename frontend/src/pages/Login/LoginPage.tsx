import React from 'react';
import styles from './LoginPage.module.css';
import InputField from './InputField';

const LoginPage: React.FC = () => {
  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginWrapper}>
        <section className={styles.loginSection}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Company Logo" className={styles.logo} />
          <h1 className={styles.loginHeading}>
            <span style={{ fontSize: '48px', color: '#223a60' }}>Login to your Account</span>
            <br />
            <span style={{ fontWeight: 400, fontSize: '20px', color: '#223a60' }}>
              Welcome back! We're always ready for your flight
            </span>
          </h1>
          <form>
            <InputField type="email" placeholder="Email" icon="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/89d1af211486f8a9cd21fd16209f0d9061374f9e65e163a37e7d9fc23b74a0e0?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Email icon" />
            <InputField type="password" placeholder="Password" icon="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/6e90b3c8d95f7afae0bf906b3c896864e711ea14cc232d3422a66e3f9c188ddb?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Password icon" />
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/200eee16c896cedc9909b4908dcd03cc02d0f730d05677a0e2c3087f1f87e70b?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="" className={styles.inputIcon} />
              <span>Remember me</span>
            </label>
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>
          <div className={styles.createAccount}>
            <p className={styles.noAccountText}>Don't have an account?</p>
            <a href="#" className={styles.createAccountLink}>Create an account</a>
          </div>
        </section>
        <section className={styles.backgroundSection}>
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