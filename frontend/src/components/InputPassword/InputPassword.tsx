import React from 'react';
import styles from './InputPassword.module.css';

interface InputPasswordProps {
  id: string;
  placeholder?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({ id, placeholder = 'Password' }) => {
  return (
    <div className={styles.inputWrapper}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/4f99d8f408629bd8675a6a08d50091c811acac04e457a14f936a41b2fdfc8e5a?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
        className={styles.icon} 
        alt=""
      />
      <label htmlFor={id} className={styles.visuallyHidden}>
        Enter your password
      </label>
      <input
        type="password"
        id={id}
        className={styles.inputField}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputPassword;