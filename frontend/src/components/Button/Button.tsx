import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => any;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, text , variant}) => {
  return (
    <button className={`${styles.button} ${variant === 'primary' ? styles.primary : styles.secondary}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;