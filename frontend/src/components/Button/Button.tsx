import React from 'react';
import styles from './Button.module.css';

interface AdjustButtonProps {
  onClick?: () => void;
}

const Button: React.FC<AdjustButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Adjust
    </button>
  );
};

export default Button;