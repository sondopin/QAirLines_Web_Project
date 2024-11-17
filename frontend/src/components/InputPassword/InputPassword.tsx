import React from 'react';
import styles from './InputPassword.module.css';

interface InputPasswordProps {
  placeholder?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ placeholder = 'Password' }) => {
  return (
    <div className={styles.inputWrapper}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
        className={styles.icon} 
        alt=""
      />
      <label htmlFor="passwordInput" className={styles.visuallyHidden}>
        Enter your password
      </label>
      <input
        type="password"
        id="passwordInput"
        className={styles.inputField}
        placeholder={placeholder}
        aria-label="Enter your password"
      />
    </div>
  );
};

export default InputPassword;