import React from 'react';
import styles from './LoginPage.module.css';

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: string;
  alt: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon, alt }) => {
  return (
    <div className={styles.inputField}>
      <img loading="lazy" src={icon} alt={alt} className={styles.inputIcon} />
      <input type={type} placeholder={placeholder} className={styles.inputText} aria-label={placeholder} />
    </div>
  );
};

export default InputField;