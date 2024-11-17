import React from 'react';
import styles from './EditButton.module.css';

interface EditButtonProps {
  onClick?: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/aa8d8e3e83a789bd420bb8b21689e794fc51aa7a19b25fd2ce759e7b7c814dc8?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
        alt="Edit icon" 
        className={styles.icon} 
      />
      <span className={styles.text}>Edit Quote and mission</span>
    </button>
  );
};

export default EditButton;