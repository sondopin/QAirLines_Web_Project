import React from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  icon: string;
  placeholder: string;
  type: string;
}

export const InputField: React.FC<InputFieldProps> = ({ icon, placeholder, type }) => {
  return (
    <div className={styles.inputField}>
      <img src={icon} alt="" className={styles.inputIcon} />
      <input type={type} placeholder={placeholder} className={styles.input} aria-label={placeholder} />
    </div>
  );
};