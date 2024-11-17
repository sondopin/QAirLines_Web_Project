import React from 'react';
import styles from './InputDate.module.css';

interface InputDateProps {
  onDateChange: (date: string) => void;
}

const InputDate: React.FC<InputDateProps> = ({ onDateChange }) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onDateChange(event.target.value);
  };

  return (
    <div className={styles.dateInput}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/f8ff8e6c001546d0b8b7d8599eb812e4/415273fc94aaa1d89555a61cf893816354b741e53f9c2faee902a705146b00f1?apiKey=f8ff8e6c001546d0b8b7d8599eb812e4&" 
        className={styles.dateIcon} 
        alt="Calendar icon"
      />
      <label htmlFor="dateInput" className="visually-hidden">Choose A Date</label>
      <input
        type="date"
        id="dateInput"
        className={styles.dateLabel}
        onChange={handleDateChange}
        aria-label="Choose A Date"
      />
    </div>
  );
};

export default InputDate;