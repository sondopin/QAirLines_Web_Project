import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  iconSrc: string;
  iconAlt: string;
  styles: any;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, iconSrc, iconAlt,styles }) => {
  return (
    <div className= {styles.inputField}>
      <img loading="lazy" src={iconSrc} alt={iconAlt} className={styles.inputIcon} />
      <input type={type} placeholder={placeholder} className={styles.inputText} aria-label={placeholder} />
    </div>
  );
};

export default InputField;