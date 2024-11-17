import React from 'react';
import styles from './Register.module.css';
import InputField from '../../components/InputFeild';


const registerPage: React.FC = () => {
  return (
    <main className={styles.registerContainer}>
      <div className={styles.registerWrapper}>
      <section className={styles.backgroundSection}>
            <img className={styles.backgroundImage} src="./background.png" alt="Background" />
          <div className={styles.backgroundContent}>
            <h2 className={styles.elevateText}>Elevate Your Journey</h2>
            <p className={styles.discoverText}>Discover the</p>
          </div>
          <p className={styles.worldText}>World</p>
        </section>
        <section className={styles.registerForm}>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/e1788ec81ceaeebbbe73440a826b9431217fe1ebd68df09e1c2b49c49251d318?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" alt="Company Logo" className={styles.logo} />
          <div className={styles.registerTitle}>
            <h1 className={styles.titleLarge}>Create Account</h1>
            <p className={styles.titleSmall}>Welcome! Ready For A New Flight!</p>
          </div>
          <form>
            <InputField type='email' placeholder='Email' iconSrc='https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/89d1af211486f8a9cd21fd16209f0d9061374f9e65e163a37e7d9fc23b74a0e0?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&' iconAlt='Email icon' styles={styles} />
            <InputField type='password' placeholder='Password' iconSrc='https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&' iconAlt='Password icon' styles={styles}/>
            <InputField type='password' placeholder='Confirm Password' iconSrc='https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&' iconAlt='Password icon' styles={styles}/>
            <button className={`${styles.button} ${ styles.primary}`}>
              Register
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default registerPage;